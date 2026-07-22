/**
 * Schedules the bulk billing.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Billing_Bulk_BulkBillingModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Billing_Bulk_BulkBillingModel_a_schedule_time
   * @property {number} i_hour Number of hours. Value between 1 and 12.
   * @property {number} i_minute Number of minutes. Value between 0 and 59.
   * @property {boolean} is_am Whether hours and minutes AM or PM. `true` if AM.
   */

  /**
   * The scheduled billing time:
   *
   * @post post
   * @type {?Wl_Billing_Bulk_BulkBillingModel_a_schedule_time}
   */
  this.a_schedule_time = null;

  /**
   * The scheduled billing date in `Y-m-d` format (business local time).
   * When empty, the billing runs immediately.
   *
   * @post post
   * @type {?string}
   */
  this.dl_schedule = null;

  /**
   * The business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the created purchase batch.
   *
   * @post result
   * @type {string}
   */
  this.k_purchase_batch = undefined;

  /**
   * The unique review id returned by {@link Wl_Billing_Bulk_PurchaseItemListModel} that identifies the prepared bulk billing
   *  data in the temporary session.
   *
   * @post post
   * @type {string}
   */
  this.s_id = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Billing_Bulk_BulkBillingModel);

/**
 * @inheritDoc
 */
Wl_Billing_Bulk_BulkBillingModel.prototype.config=function()
{
  return {"a_field":{"a_schedule_time":{"post":{"post":true}},"dl_schedule":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_purchase_batch":{"post":{"result":true}},"s_id":{"post":{"post":true}}}};
};

/**
 * Schedules the bulk billing.
 *
 * Reads the prepared data from the temporary session by the review id and schedules the billing. The eligibility
 * and restriction checks were already done during preparation, so they are not repeated here.
 *
 * @function
 * @name Wl_Billing_Bulk_BulkBillingModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
