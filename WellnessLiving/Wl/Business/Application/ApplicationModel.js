/**
 * Api point allowing to get information about the business application.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Application_ApplicationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * Key of a business to show information for.
   *
   * Primary key from {@link RsSkinSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Application title. Empty for default application.
   *
   * @get result
   * @type {string}
   */
  this.text_application_title = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Application_ApplicationModel);

/**
 * @inheritDoc
 */
Wl_Business_Application_ApplicationModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"get": {"get": true}},"text_application_title": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Business_Application_ApplicationModel.instanceGet
 * @param {string} k_business Key of a business to show information for. Primary key from {@link RsSkinSql} table.
 * @returns {Wl_Business_Application_ApplicationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */