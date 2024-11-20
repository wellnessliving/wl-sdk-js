/**
 * An endpoint that gets information about the business application.
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
   * The key of the business to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The application title. This will be empty for the default application.
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
 * @param {string} k_business The key of the business to show information for.
 * @returns {Wl_Business_Application_ApplicationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */