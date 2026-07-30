/**
 * Cancels a scheduled bulk billing so that it is never billed.
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
   * @put post
   * @type {?Wl_Billing_Bulk_BulkBillingModel_a_schedule_time}
   */
  this.a_schedule_time = null;

  /**
   * The scheduled billing date (business local time).
   * When `null` the billing runs immediately.
   *
   * @post post
   * @put post
   * @type {?string}
   */
  this.dl_schedule = null;

  /**
   * The business key.
   *
   * @delete post
   * @post post
   * @put post
   * @type {string}
   */
  this.k_business = "";

  /**
   * The purchase batch key.
   *
   * @delete post
   * @post result
   * @put post
   * @type {string}
   */
  this.k_purchase_batch = "";

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
  return {"a_field":{"a_schedule_time":{"post":{"post":true},"put":{"post":true}},"dl_schedule":{"post":{"post":true},"put":{"post":true}},"k_business":{"delete":{"post":true},"post":{"post":true},"put":{"post":true}},"k_purchase_batch":{"delete":{"post":true},"post":{"result":true},"put":{"post":true}},"s_id":{"post":{"post":true}}}};
};

/**
 * Cancels a scheduled bulk billing so that it is never billed.
 *
 * Only a batch that has not started billing yet can be cancelled.
 *
 * @function
 * @name Wl_Billing_Bulk_BulkBillingModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

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

/**
 * Reschedules a previously scheduled bulk billing to a new date and time.
 *
 * A reschedule always targets an explicit date and time.
 * Only a batch that has not started billing yet can be rescheduled.
 *
 * @function
 * @name Wl_Billing_Bulk_BulkBillingModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
