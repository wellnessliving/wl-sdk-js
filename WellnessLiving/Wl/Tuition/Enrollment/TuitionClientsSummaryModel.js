/**
 * Returns summary of clients and events enrolled for the given tuitions.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Tuition_Enrollment_TuitionClientsSummaryModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Tuition_Enrollment_TuitionClientsSummaryModel_a_summary
   * @property {number} i_clients_enrolled Number of unique clients having at least one not cancelled enrolled event.
   * @property {number} i_enrolled_total Total number of not cancelled event enrollments.
   * @property {number} i_events_unique Number of unique events having at least one not cancelled enrollment.
   */

  /**
   * Summary of clients and events enrolled, per tuition.
   *
   * Keys - tuition IDs from $a_tuition_id. Values - summary information:
   *
   * @get result
   * @type {Wl_Tuition_Enrollment_TuitionClientsSummaryModel_a_summary[]}
   */
  this.a_summary = undefined;

  /**
   * Keys of the tuitions in the tuition microservice to get summary for.
   *
   * @get get
   * @type {string[]}
   */
  this.a_tuition_id = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Tuition_Enrollment_TuitionClientsSummaryModel);

/**
 * @inheritDoc
 */
Wl_Tuition_Enrollment_TuitionClientsSummaryModel.prototype.config=function()
{
  return {"a_field":{"a_summary":{"get":{"result":true}},"a_tuition_id":{"get":{"get":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * Returns summary of clients and events enrolled for the given tuitions.
 *
 * For each requested tuition, returns the number of unique clients enrolled in at least one not cancelled
 * event, the number of unique events with at least one not cancelled enrollment, and the total number of
 * not cancelled event enrollments.
 *
 * @function
 * @name Wl_Tuition_Enrollment_TuitionClientsSummaryModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
