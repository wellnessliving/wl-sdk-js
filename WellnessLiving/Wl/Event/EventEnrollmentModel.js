/**
 * Returns a list of clients enrolled in the specified event classes.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Event_EventEnrollmentModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of event classes for which enrollment must be retrieved.
   *
   * @get get
   * @type {string[]}
   */
  this.a_class = undefined;

  /**
   * @typedef {{}} Wl_Event_EventEnrollmentModel_a_enrollments
   * @property {boolean} is_enrolled_full `true` if the client has a block event enrollment record set for this class   (booked the whole event); `false` otherwise.
   * @property {string} uid Key of the client who attended or will attend the event. Primary key in PassportLoginSql table.
   */

  /**
   * A list of clients enrolled in the specified event classes.
   *
   * Key is the class key. Primary key in RsClassSql table.
   *
   * Value is a list of clients enrolled in that class. Each element contains:
   *
   * @get result
   * @type {Wl_Event_EventEnrollmentModel_a_enrollments[]}
   */
  this.a_enrollments = undefined;

  /**
   * Key of the business to which the event classes belong.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Event_EventEnrollmentModel);

/**
 * @inheritDoc
 */
Wl_Event_EventEnrollmentModel.prototype.config=function()
{
  return {"a_field":{"a_class":{"get":{"get":true}},"a_enrollments":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * Returns a list of clients enrolled in the specified event classes.
 *
 * An enrollment is considered to exist for any client that has an active (not canceled, not missed) visit,
 * past or future, for one of the specified classes.
 *
 * @function
 * @name Wl_Event_EventEnrollmentModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
