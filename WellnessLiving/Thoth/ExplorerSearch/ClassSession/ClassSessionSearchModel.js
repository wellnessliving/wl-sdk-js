/**
 * Gets list of class sessions based on search criteria.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_ExplorerSearch_ClassSession_ClassSessionSearchModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of business keys to search by.
   *
   * Empty array to not filter by business keys.
   *
   * @get get
   * @type {string[]}
   */
  this.a_business = undefined;

  /**
   * @typedef {{}} Thoth_ExplorerSearch_ClassSession_ClassSessionSearchModel_a_class_session
   * @property {?string} dtu_book_begin Date and time when booking for this session starts in UTC. `null` if there is no "too early" limitation.
   * @property {?string} dtu_book_end Date and time when booking for this session ends in UTC. `null` if there is no "too late" limitation.
   * @property {string} dtu_session Date and time of the session in UTC.
   * @property {string} k_class Class key.
   * @property {string} k_class_period Class period key.
   * @property {string} k_class_period_session Class session key.
   */

  /**
   * List of found class sessions.
   *
   * Each item is an associative array with the following structure:
   *
   * @get result
   * @type {Thoth_ExplorerSearch_ClassSession_ClassSessionSearchModel_a_class_session}
   */
  this.a_class_session = undefined;

  /**
   * List of experience types to search by. Each value is one of {@link Thoth_ExplorerSearch_ClassSession_SearchWord_ClassSessionExperienceTypeEnum} case values.
   *
   * Empty array to not filter by experience type.
   *
   * @get get
   * @type {number[]}
   */
  this.a_experience_type = undefined;

  /**
   * List of home tour activity types to search by. Each value is from {@link RsHomeTourSid}.
   *
   * Empty array to not filter by home tour type.
   *
   * @get get
   * @type {number[]}
   */
  this.a_home_tour = undefined;

  /**
   * List of location keys to search by.
   *
   * Empty array to not filter by location keys.
   *
   * @get get
   * @type {string[]}
   */
  this.a_location = undefined;

  /**
   * List of location ratings to search by. Values are integers from 1 to 5, or `null`/`0` for unrated locations.
   *
   * Empty array to not filter by location rating.
   *
   * @get get
   * @type {number[]|string[]}
   */
  this.a_location_rating = undefined;

  /**
   * List of staff user keys to search by. Each value is a user key (uid) of a staff member.
   *
   * Empty array to not filter by staff.
   *
   * @get get
   * @type {string[]}
   */
  this.a_staff_uid = undefined;

  /**
   * Start date of the session search date range in MySQL format (`Y-m-d`). Required.
   *
   * `null` if not set by request.
   *
   * @get get
   * @type {?string}
   */
  this.dl_begin = null;

  /**
   * End date of the session search date range in MySQL format (`Y-m-d`). Required.
   *
   * `null` if not set by request.
   *
   * @get get
   * @type {?string}
   */
  this.dl_end = null;

  /**
   * Latitude coordinate for search. Required.
   *
   * `null` if not set by request.
   *
   * @get get
   * @type {?number}
   */
  this.f_latitude = null;

  /**
   * Longitude coordinate for search. Required.
   *
   * `null` if not set by request.
   *
   * @get get
   * @type {?number}
   */
  this.f_longitude = null;

  /**
   * Search radius in kilometers. Required.
   *
   * `null` if not set by request.
   *
   * @get get
   * @type {?number}
   */
  this.f_radius = null;

  /**
   * Maximum price to search by (inclusive). Decimal string in dollars (e.g. `"100.00"`).
   *
   * `null` to not limit by maximum price.
   *
   * @get get
   * @type {?string}
   */
  this.m_price_max = null;

  /**
   * Minimum price to search by (inclusive). Decimal string in dollars (e.g. `"0.00"`).
   *
   * `null` to not limit by minimum price.
   *
   * @get get
   * @type {?string}
   */
  this.m_price_min = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Thoth_ExplorerSearch_ClassSession_ClassSessionSearchModel);

/**
 * @inheritDoc
 */
Thoth_ExplorerSearch_ClassSession_ClassSessionSearchModel.prototype.config=function()
{
  return {"a_field":{"a_business":{"get":{"get":true}},"a_class_session":{"get":{"result":true}},"a_experience_type":{"get":{"get":true}},"a_home_tour":{"get":{"get":true}},"a_location":{"get":{"get":true}},"a_location_rating":{"get":{"get":true}},"a_staff_uid":{"get":{"get":true}},"dl_begin":{"get":{"get":true}},"dl_end":{"get":{"get":true}},"f_latitude":{"get":{"get":true}},"f_longitude":{"get":{"get":true}},"f_radius":{"get":{"get":true}},"m_price_max":{"get":{"get":true}},"m_price_min":{"get":{"get":true}}}};
};

/**
 * Gets list of class sessions based on search criteria.
 *
 * Returns sessions matching the given geographic area, date range, and optional filters for business,
 * location, staff, experience type, home tour type, price, and location rating.
 * Only sessions within their current booking window are included in the result.
 *
 * @function
 * @name Thoth_ExplorerSearch_ClassSession_ClassSessionSearchModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
