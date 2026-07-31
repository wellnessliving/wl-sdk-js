/**
 * Returns list of enrollments for the tuition.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Tuition_Enrollment_TuitionEnrollmentListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Tuition_Enrollment_TuitionEnrollmentListModel_a_enrollment_a_events
   * @property {boolean} is_cancelled Whether this enrollment is cancelled or not.
   * @property {string} k_class Event ID.
   * @property {string} m_event_discount Login type and shopping cart discounts.
   * @property {string} m_event_subtotal Price of the event before login type and shopping cart discounts.
   * @property {string} m_event_tax Taxes amount.
   * @property {string} uid Enrolled client.
   */

  /**
   * @typedef {{}} Wl_Tuition_Enrollment_TuitionEnrollmentListModel_a_enrollment
   * @property {Wl_Tuition_Enrollment_TuitionEnrollmentListModel_a_enrollment_a_events[]} a_events Events for this enrollment.
   * @property {?string} dl_next Next payment date in local business timezone and MySQL format.
   * @property {string} dtl_enrollment Date and time of the enrollment in local business timezone.
   * @property {number} i_payments_done Number of payments done.
   * @property {?number} i_payments_left Number of payments left.
   * @property {number} i_payments_total Number of payments total at the moment of enrollment.
   * @property {?number} id_installment_status Installment plan status.
   * @property {string} k_purchase_item_tuition Key of the tuition purchase item. This is enrollment key, which can be used to modify and cancel the enrollment.
   * @property {string} m_paid Rest amount has been already paid.
   * @property {string} m_payment One payment amount.
   * @property {?string} m_rest Rest amount to be paid.
   * @property {?string} m_total Total initial amount to be paid.
   * @property {string} uid_payer Payer for this enrollment.
   */

  /**
   * List of tuition enrollments.
   *
   * @get result
   * @type {Wl_Tuition_Enrollment_TuitionEnrollmentListModel_a_enrollment[]}
   */
  this.a_enrollment = undefined;

  /**
   * @typedef {{}} Wl_Tuition_Enrollment_TuitionEnrollmentListModel_a_filter
   * @property {string[]} a_event Leave only enrollments with the given events enrolled.
   * @property {string[]} a_purchase_item_tuition List of tuition enrollments ids to leave only.
   * @property {number[]} a_statuses List of tuition statuses.
   * @property {string[]} a_uid_any Leave only enrollments with the given payers or enrolled clients.
   * @property {string[]} a_uid_enrolled Leave only enrollments with the given enrolled clients.
   * @property {string[]} a_uid_payer Leave only enrollments with the given payers.
   */

  /**
   * Filters.
   *
   * List includes enrollments to the tuition. And enrollments to the tuition include enrollment to the event.
   * If any part of the enrollment to the tuition is valid, according to the given filter, full enrollment is included.
   *
   * For example.
   * Client A is payer for two tuition enrollments. One is for client B and events E1, E2. Another for clients C and D.
   * Both for E1. And Client W pays for one tuition enrollment - for client X.
   *
   * If we filter list by enrolled client D, for example. List will return two tuition enrollments. Both paid with Client A.
   * Because we think that these enrollments are combined in single family and should both be returned.
   *
   * All filters are optional. And added as AND. If you send certain events and certain statues, both conditions should be met.
   *
   * @get get
   * @type {Wl_Tuition_Enrollment_TuitionEnrollmentListModel_a_filter}
   */
  this.a_filter = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the tuition in tuition microservice.
   *
   * @get get
   * @type {string}
   */
  this.s_tuition_id = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Tuition_Enrollment_TuitionEnrollmentListModel);

/**
 * @inheritDoc
 */
Wl_Tuition_Enrollment_TuitionEnrollmentListModel.prototype.config=function()
{
  return {"a_field":{"a_enrollment":{"get":{"result":true}},"a_filter":{"get":{"get":true}},"k_business":{"get":{"get":true}},"s_tuition_id":{"get":{"get":true}}}};
};

/**
 * Returns list of enrollments for the tuition.
 *
 * Get a full list of users who purchased the tuition. For each enrollment, returns the list of events
 * and the users have been enrolled in.
 *
 * @function
 * @name Wl_Tuition_Enrollment_TuitionEnrollmentListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
