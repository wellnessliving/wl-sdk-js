# Order Sync API

Allows external ecommerce or POS systems to synchronize orders into WellnessLiving. This endpoint validates the order details, checks inventory/availability, processes the transaction record without charging (assuming external payment), and links it to a user.

## Endpoint

**HTTP Method:** `POST`
**Permissions:** Requires `WlApiApplicationGroup::ECOMMERCE_ORDER_SYNC` access (usually authenticated via namespace credentials).
**Access:** Authenticated User must have `store-sell` privilege.

## Request Parameters

### General Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `k_business` | string | **Yes** | The primary key of the business (`RsBusinessSql`). |
| `k_location` | string | **Yes** | The primary key of the location (`RsLocationSql`). |
| `uid` | string | **Yes** | The primary key of the user (`PassportLoginSql`) who is making the purchase. |
| `text_order` | string | **Yes** | Unique external order ID (e.g., from Shopify or Magento). Max 255 chars. Used for idempotency to prevent duplicate orders. |
| `id_mode` | int | No | The mode of operation (see `ModeSid`). Default is API mode. |
| `m_tip` | string | No | Tip amount. Must be valid amount format. |
| `text_receipt_note` | string | No | Custom note to appear on the receipt. |
| `a_purchase_item` | array[] | **Yes** | List of items to purchase. See validation rules below. |
| `a_pay_form` | array[] | **Yes** | List of payment methods used. See structure below. |

### Purchase Item Structure (`a_purchase_item`)

Each element in the `a_purchase_item` array represents a line item:

| Field | Type | Description |
|---|---|---|
| `id_purchase_item` | int | The type of item (e.g., Product, Appointment, Session). Corresponds to `Wl_Purchase_Item_ItemSid`. |
| `k_id` | string | The primary key of the item being purchased (e.g., `k_shop_product`). |
| `i_quantity` | int | Quantity of the item. |
| `m_price_manual` | string | (Optional) Override price per item. |
| `k_shop_product_option` | string | (Optional) Specific option key if buying a product. If omitted, system attempts to find default. |
| `a_tax` | array[] | (Optional) Custom tax overrides. |
| `a_config` | array | (Optional) Item-specific configuration (see below). |

#### Item Configuration (`a_config`)
Depends on `id_purchase_item`.

*   **Promotions (Memberships/Passes):**
    *   `dl_start`: Start date.
    *   `is_renew`: Boolean, auto-renew status.
    *   `m_prorate_custom`: Custom prorate amount.
*   **Gift Cards (`Wl_Purchase_Item_ItemSid::COUPON`):**
    *   `s_code`: The custom gift card code.
    *   `dt_send_local`: Date to send the email.
    *   `a_quick_gift`: List of components if it is a Quick Gift Card.
*   **Tips (`Wl_Purchase_Item_ItemSid::APPOINTMENT_TIP`):**
    *   `k_staff`: The staff member receiving the tip.

### Payment Form Structure (`a_pay_form`)

List of payments that equal the total order amount.

| Field | Type | Description |
|---|---|---|
| `id_pay_method` | int | The payment method ID (e.g., External, Cash). See `RsPayMethodSid`. |
| `k_pay_method` | string | (Optional) The specific card on file key, if applicable. |
| `m_amount` | string | The amount paid using this method. |
| `m_surcharge` | string | (Optional) Surcharge amount applied to this payment. |

## Response Parameters

| Field | Type | Description |
|---|---|---|
| `k_purchase` | string | The primary key of the newly created purchase (`RsPurchaseSql`). |

## Examples

### Request Example
```json
{
  "k_business": "100",
  "k_location": "25",
  "uid": "9999",
  "text_order": "EXT-12345-ABC",
  "m_tip": "5.00",
  "text_receipt_note": "Imported from Online Store",
  "a_pay_form": [
    {
      "id_pay_method": 11,
      "m_amount": "55.00"
    }
  ],
  "a_purchase_item": [
    {
      "id_purchase_item": 3,
      "k_id": "555",
      "i_quantity": 1,
      "m_price_manual": "50.00",
      "a_config": []
    }
  ]
}
```

### Response Example
```json
{
  "k_purchase": "8888-7777-6666"
}
```

## Error Codes

The API returns standard WellnessLiving JSON error responses. Specific error codes (`sid_exception`) for this endpoint include:

*   `access`: User does not have permission to sell (`PrivilegeSid::STORE_SELL`).
*   `pay-amount-mismatch`: The sum of `a_pay_form` amounts does not match the calculate total of items (including taxes).
*   `order-exists`: (Implicit) If `text_order` already exists, the API is idempotent and may return the existing `k_purchase` or success without creating a duplicate.
*   `access-foreign`: Appointment belongs to another user.
*   `purchase-item-location`: Item is not sold at the specified `k_location`.
*   `flagged`: User is flagged in this location and cannot purchase.
*   `tip-disable`: Tips are disabled for this business.
*   `product-nx`: Product ID not found.
*   `code-x`: Gift card code already exists.
*   `prorate-start`: Prorate date conflict.