/**
 * Allows to get and update timezone in user's profile.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Timezone_ProfileTimezoneModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of the business, in which user selected timezone.
   *
   * Primary key in {@link \RsBusinessSql}.
   *
   * @put post
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Key of the timezone, which user selected to see site in.
   *
   * Primary key in {@link \AGeoTimezoneSql}.
   *
   * @put post
   * @type {string}
   */
  this.k_timezone = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Timezone_ProfileTimezoneModel);

/**
 * @inheritDoc
 */
Wl_Profile_Timezone_ProfileTimezoneModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"put": {"post": true}},"k_timezone": {"put": {"post": true}}}};
};