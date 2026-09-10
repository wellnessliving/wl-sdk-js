/**
 * Registers a visit to user profile by current user.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Visit_VisitModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * UID of the user that is visited by current user.
   *
   * @post post
   * @type {string}
   */
  this.uid_profile = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Visit_VisitModel);

/**
 * @inheritDoc
 */
Wl_Profile_Visit_VisitModel.prototype.config=function()
{
  return {"a_field":{"uid_profile":{"post":{"post":true}}}};
};

/**
 * Registers a visit to user profile by current user.
 *
 * This is used to show a list of users that current user has recently visited in search results.
 *
 * @function
 * @name Wl_Profile_Visit_VisitModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
