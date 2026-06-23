/**
 * Checks if the user can physically access the location.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Integration_DragonFly_AccessModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Whether the specified user can access the location.
   * `true` if the specified member can access the location.
   * `false` if they can not.
   *
   * @get result
   * @type {boolean}
   */
  this.can_access = undefined;

  /**
   * The location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * The member ID.
   * Member ID is intended to work with barcode scanners.
   * If this is specified the user key does not need to be set.
   *
   * @get get
   * @type {string}
   */
  this.s_member = "";

  /**
   * The user key.
   * This should be specified if the member ID is not set or not known.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Integration_DragonFly_AccessModel);

/**
 * @inheritDoc
 */
Wl_Integration_DragonFly_AccessModel.prototype.config=function()
{
  return {"a_field":{"can_access":{"get":{"result":true}},"k_location":{"get":{"get":true}},"s_member":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * Checks if the user can physically access the location.
 *
 * There are 3 scenarios where a user can be given access.
 * Scenario 1 - If a valid member ID used, for instance from a bar code scanner, then the user may have access.
 * Scenario 2 - If a valid uid is used and the user is a staff member, then the user may have access.
 * Scenario 3 - If a valid uid is used and the client has a session or gym access at this location, then the user may have access.
 *
 * @function
 * @name Wl_Integration_DragonFly_AccessModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
