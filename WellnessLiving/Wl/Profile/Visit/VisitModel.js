/**
 * API for controlling the last visits of users.
 *
 * This model is generated automatically based on API.
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
   * Primary key in {@link PassportLoginSql}.
   *
   * @post post
   * @type {string}
   */
  this.uid_profile = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Visit_VisitModel);

/**
 * @inheritDoc
 */
Wl_Profile_Visit_VisitModel.prototype.config=function()
{
  return {"a_field": {"uid_profile": {"post": {"post": true}}}};
};