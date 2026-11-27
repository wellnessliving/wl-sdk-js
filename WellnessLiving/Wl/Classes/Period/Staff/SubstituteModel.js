/**
 * Replaces the instructors of one session of a class or an event.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Classes_Period_Staff_SubstituteModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Keys of the class periods that the call created or changed.
   *
   * The first key is {@link Wl_Classes_Period_Staff_SubstituteModel.k_class_period}, which holds only the given session after the call. The
   * other keys are the class periods that the call created for the sessions of the series before and after the
   * given session, where there are such sessions. Empty if the call changed nothing.
   *
   * @post result
   * @type {string[]}
   */
  this.a_class_period = undefined;

  /**
   * @typedef {{}} Wl_Classes_Period_Staff_SubstituteModel_a_staff
   * @property {?string} k_staff_pay Key of the pay rate of the instructor for the session. `null` if the session uses no pay rate of its own. The request may also send an empty string or leave this key out, which both mean `null`; the result always has this key.
   * @property {string} uid_staff Key of the user of the instructor.
   */

  /**
   * The instructors of the session.
   *
   * In the request, the full list of the instructors that the session must have: an instructor of the session who is
   * not in the list is removed from the session. In the result, the instructors of the session after the call.
   *
   * Each element has the following structure:
   *
   * @post post,result
   * @type {Wl_Classes_Period_Staff_SubstituteModel_a_staff[]}
   */
  this.a_staff = undefined;

  /**
   * Local date and start time of one session of the series in MySQL format, for example `2026-12-03 14:00:00`.
   *
   * @post post
   * @type {string}
   */
  this.dt_date_local = "";

  /**
   * Whether the call changed the instructors of the session.
   *
   * `true` if the instructors were changed, `false` if the session already had the given instructors with the given
   * pay rates.
   *
   * @post result
   * @type {boolean}
   */
  this.is_change = undefined;

  /**
   * Key of the business.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the class period of the session.
   *
   * @post post
   * @type {string}
   */
  this.k_class_period = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Classes_Period_Staff_SubstituteModel);

/**
 * @inheritDoc
 */
Wl_Classes_Period_Staff_SubstituteModel.prototype.config=function()
{
  return {"a_field":{"a_class_period":{"post":{"result":true}},"a_staff":{"post":{"post":true,"result":true}},"dt_date_local":{"post":{"post":true}},"is_change":{"post":{"result":true}},"k_business":{"post":{"post":true}},"k_class_period":{"post":{"post":true}}}};
};

/**
 * Replaces the instructors of one session of a class or an event.
 *
 * Sets the given instructors for the session of {@link Wl_Classes_Period_Staff_SubstituteModel.k_class_period} that takes place at
 * {@link Wl_Classes_Period_Staff_SubstituteModel.dt_date_local}. The other sessions of the series keep their instructors: the series is
 * split around the date, so that the session gets a class period of its own, and the sessions before and after it
 * get new class periods. Every instructor must work for the business and teach the kind of the session, a class or
 * an event. The clients booked into the session and the instructors who are added or removed are notified. A call
 * with the instructors that the session already has changes nothing and notifies nobody.
 *
 * @function
 * @name Wl_Classes_Period_Staff_SubstituteModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
