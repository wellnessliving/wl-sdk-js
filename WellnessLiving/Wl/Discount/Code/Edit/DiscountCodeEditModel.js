/**
 * Gets information about discount.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Discount_Code_Edit_DiscountCodeEditModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Discount_Code_Edit_DiscountCodeEditModel_a_component
   * @property {number} id_purchase_item A list of purchase types.
   * @property {string} k_id Primary key of the component. <p>Special Notes:</p> <ul>   <li>Zero means that all elements of this type are available.</li>   <li>For `id_purchase_item`={@link RsPurchaseItemSid} we store .`k_class` in the `k_id` field.</li> </ul>
   * @property {string} text_title Title of the component.
   */

  /**
   * List of components that are affected by this discount code.
   * Each element is an array containing:
   *
   * @get result
   * @type {Wl_Discount_Code_Edit_DiscountCodeEditModel_a_component[]}
   */
  this.a_component = undefined;

  /**
   * List of client types.
   *
   * @get result
   * @post post
   * @type {string[]}
   */
  this.a_login_type = undefined;

  /**
   * List of client groups.
   *
   * @get result
   * @post post
   * @type {string[]}
   */
  this.a_member_group = undefined;

  /**
   * Expiration date. `null` if discount code is never expires.
   *
   * @get result
   * @post post
   * @type {?string}
   */
  this.dl_end = null;

  /**
   * Activation date.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.dl_start = "";

  /**
   * Value of the percentage or fixed discount.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.f_value = "0.00";

  /**
   * Count of calendar periods from `id_duration` before expiration.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.i_duration = 0;

  /**
   * Maximum count of usage. Zero means unlimited usage.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.i_limit = 0;

  /**
   * A class for managing time intervals.
   * Last ID: 9.
   *
   * Values:
   * - 4 (`DAY`): Days.
   * - 3 (`HOUR`): Hours.
   * - 2 (`MINUTE`): Minutes.
   * - 5 (`MONTH`): Months.
   * - 1 (`SECOND`): Seconds.
   * - 7 (`WEEK`): Weeks (7 days).
   * - 9 (`WEEK2`): Two weeks (14 days).
   * - 8 (`WEEK4`): Foursome of weeks (28 days).
   * - 6 (`YEAR`): Years.
   *
   * @get result
   * @post post
   * @see ADurationSid
   * @type {number}
   */
  this.id_duration = 0;

  /**
   * Class to process string identifiers for duration types
   *
   * Last ID: 3.
   *
   * Values:
   * - 2 (`DATE`): Specific date. Example, 2013-12-24.
   * - 3 (`ETERNAL`): No ending date.
   * - 1 (`PERIOD`): Examples: 12 days, 2 months, 2 hours etc.
   *
   * @get result
   * @post post
   * @see RsDurationTypeSid
   * @type {number}
   */
  this.id_duration_type = 0;

  /**
   * `true` means discount code is active.
   * `false` means discount code is inactive.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_active = false;

  /**
   * `true` means membership will auto-renew at discounted rate.
   * `false` means membership will auto-renew at full rate.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_auto_renew = false;

  /**
   * `true` means discount code can reduce price of the gift cards.
   * `false` means discount code cannot reduce price of the gift cards.
   *
   * If {@link Wl_Discount_Code_Edit_DiscountCodeEditModel.is_purchase_all} is `true` this fields does not matter.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_coupon = false;

  /**
   * `true` means discount code can be applied to first membership payment only.
   * `false` means discount code can be applied to all membership payments.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_first_payment = false;

  /**
   * `true` means that only selected client types or groups can use this discount code.
   * `false` means that all client types and groups can use this discount code.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_login_type = false;

  /**
   * `true` if clients can use this discount code in online store,
   * `false` if discount code can be used only in point of sale.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_online = false;

  /**
   * `true` means discount value is percent from the purchase amount.
   * `false` means discount value is fixed sum from the purchase amount.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_percent = false;

  /**
   * `true` means discount can be applied to all products and purchase options.
   * `false` means discount can be applied only to the selected product and purchase options.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_purchase_all = false;

  /**
   * Business key.
   *
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the discount code. Empty, if this is creation of a new code.
   *
   * @get get
   * @post get,result
   * @put get,result
   * @type {string}
   */
  this.k_discount_code = "";

  /**
   * List of product and purchase options that are effected with this discount code.
   * Each element has the next format: `id_purchase_item`:`k_id`, where `id_purchase_item` -
   * one of {@link RsPurchaseItemSid}, `k_id` is key of certain purchase item.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.s_component = "";

  /**
   * Discount code that can be used during purchase.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_code = "";

  /**
   * Description of the discount code.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_description = "";

  /**
   * Name of the discount code.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_title = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Discount_Code_Edit_DiscountCodeEditModel);

/**
 * @inheritDoc
 */
Wl_Discount_Code_Edit_DiscountCodeEditModel.prototype.config=function()
{
  return {"a_field":{"a_component":{"get":{"result":true}},"a_login_type":{"get":{"result":true},"post":{"post":true}},"a_member_group":{"get":{"result":true},"post":{"post":true}},"dl_end":{"get":{"result":true},"post":{"post":true}},"dl_start":{"get":{"result":true},"post":{"post":true}},"f_value":{"get":{"result":true},"post":{"post":true}},"i_duration":{"get":{"result":true},"post":{"post":true}},"i_limit":{"get":{"result":true},"post":{"post":true}},"id_duration":{"get":{"result":true},"post":{"post":true}},"id_duration_type":{"get":{"result":true},"post":{"post":true}},"is_active":{"get":{"result":true},"post":{"post":true}},"is_auto_renew":{"get":{"result":true},"post":{"post":true}},"is_coupon":{"get":{"result":true},"post":{"post":true}},"is_first_payment":{"get":{"result":true},"post":{"post":true}},"is_login_type":{"get":{"result":true},"post":{"post":true}},"is_online":{"get":{"result":true},"post":{"post":true}},"is_percent":{"get":{"result":true},"post":{"post":true}},"is_purchase_all":{"get":{"result":true},"post":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true},"put":{"get":true}},"k_discount_code":{"get":{"get":true},"post":{"get":true,"result":true},"put":{"get":true,"result":true}},"s_component":{"get":{"result":true},"post":{"post":true}},"text_code":{"get":{"result":true},"post":{"post":true}},"text_description":{"get":{"result":true},"post":{"post":true}},"text_title":{"get":{"result":true},"post":{"post":true}}}};
};

/**
 * Gets information about discount.
 *
 * Used to load the discount code editor form. Returns the full configuration of an existing discount
 * code so the staff member can review or modify it: value, date range, usage limit, which items it
 * applies to, client type restrictions, and whether it is currently active.
 *
 * @function
 * @name Wl_Discount_Code_Edit_DiscountCodeEditModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves information about discount code or create new.
 *
 * Used to create a new discount code or update an existing one from the backend editor. Pass no
 * discount code key to create; pass an existing key to update. Returns the key of the saved code.
 *
 * @function
 * @name Wl_Discount_Code_Edit_DiscountCodeEditModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

/**
 * Duplicates an existing discount code.
 *
 * Used in the backend when a staff member wants to create a similar discount code without re-entering
 * all settings manually. Creates an exact copy with a new unique code string.
 *
 * @function
 * @name Wl_Discount_Code_Edit_DiscountCodeEditModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
