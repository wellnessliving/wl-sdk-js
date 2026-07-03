/**
 * Allows canceling certain event enrollments within tuition.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Tuition_Enrollment_TuitionEnrollmentCancelModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Tuition_Enrollment_TuitionEnrollmentCancelModel_a_event_cancel
   * @property {string} k_class Enrolled event ID.
   * @property {string} uid Enrolled user ID.
   */

  /**
   * List of users and events to be canceled.
   *
   * Each element has two keys: `uid` and `k_class`.
   *
   * @put post
   * @type {Wl_Tuition_Enrollment_TuitionEnrollmentCancelModel_a_event_cancel[]}
   */
  this.a_event_cancel = undefined;

  /**
   * Whether upcoming visits should be canceled or not.
   *
   * @put post
   * @type {boolean}
   */
  this.is_cancel_visits = false;

  /**
   * Whether even pass should be deactivated or not.
   *
   * @put post
   * @type {boolean}
   */
  this.is_pass_deactivate = false;

  /**
   * Key of the tuition purchase item. This is enrollment key, which can be got from {@link Wl_Tuition_Enrollment_TuitionEnrollmentListModel}.
   *
   * @put post
   * @type {string}
   */
  this.k_purchase_item_tuition = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Tuition_Enrollment_TuitionEnrollmentCancelModel);

/**
 * @inheritDoc
 */
Wl_Tuition_Enrollment_TuitionEnrollmentCancelModel.prototype.config=function()
{
  return {"a_field":{"a_event_cancel":{"put":{"post":true}},"is_cancel_visits":{"put":{"post":true}},"is_pass_deactivate":{"put":{"post":true}},"k_purchase_item_tuition":{"put":{"post":true}}}};
};

/**
 * Allows canceling certain event enrollments within tuition.
 *
 * Send all users and events, which should be canceled to reduce tuition payment, cancel visits, and deactivate even pass.
 *
 * @function
 * @name Wl_Tuition_Enrollment_TuitionEnrollmentCancelModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
