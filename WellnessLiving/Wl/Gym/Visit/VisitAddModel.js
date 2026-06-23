/**
 * Records a gym visit for the specified client at the given date and time.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Gym_Visit_VisitAddModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Gym_Visit_VisitAddModel_a_time
   * @property {number} i_hour The hour component.
   * @property {number} i_minute The minute component.
   * @property {boolean} is_am If `true` the visit is in the AM. If `false` it is in the PM.
   */

  /**
   * The time of the visit, in the location's timezone. An array with the following fields:
   *
   * @post post
   * @type {Wl_Gym_Visit_VisitAddModel_a_time}
   */
  this.a_time = undefined;

  /**
   * The date of visit, without a time component in MySQL format. Date is based on the timezone of the location.
   *
   * @post post
   * @type {string}
   */
  this.dt_date = "";

  /**
   * Determines whether payment is required for the visit.
   *
   * `true` if payment is needed for the visit.
   * `false` if visit should be not pay.
   *
   * @post post
   * @type {boolean}
   */
  this.is_pay = false;

  /**
   * The business key.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The location key.
   *
   * @post get
   * @type {string}
   */
  this.k_location = "";

  /**
   * The key of the user making the gym visit.
   *
   * @post get
   * @type {string}
   */
  this.uid = "";

  /**
   * Url to the business catalog with items that can be used to pay for the visit.
   *
   * @post result
   * @type {string}
   */
  this.url_catalog = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Gym_Visit_VisitAddModel);

/**
 * @inheritDoc
 */
Wl_Gym_Visit_VisitAddModel.prototype.config=function()
{
  return {"a_field":{"a_time":{"post":{"post":true}},"dt_date":{"post":{"post":true}},"is_pay":{"post":{"post":true}},"k_business":{"post":{"get":true}},"k_location":{"post":{"get":true}},"uid":{"post":{"get":true}},"url_catalog":{"post":{"result":true}}}};
};

/**
 * Records a gym visit for the specified client at the given date and time.
 *
 * Validates access and input, creates a visit record for the client at the specified location, optionally
 * applies a membership promotion if payment is required, and returns the catalog URL if no promotion was
 * found and payment was requested.
 *
 * @function
 * @name Wl_Gym_Visit_VisitAddModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
