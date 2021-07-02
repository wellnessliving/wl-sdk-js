/**
 * Retrieve log data.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Log_LogBusinessDataModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_log,k_business";

  /**
   * @typedef {{}} Wl_Log_LogBusinessDataModel_a_template
   * @property {string} html_template Log data template.
   */

  /**
   * <dl>
   *   <dt>
   *     string <var>html_template</var>
   *   </dt>
   *   <dd>
   *     Log data template.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Log_LogBusinessDataModel_a_template[]}
   */
  this.a_template = undefined;

  /**
   * Business key.
   *
   * Primary key from {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Log key.
   *
   * Primary key from {@link \Core\Log\DataSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_log = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Log_LogBusinessDataModel);

/**
 * @inheritDoc
 */
Wl_Log_LogBusinessDataModel.prototype.config=function()
{
  return {"a_field": {"a_template": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_log": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Log_LogBusinessDataModel.instanceGet
 * @param {string} k_log Log key. Primary key from {@link \Core\Log\DataSql} table.
 * @param {string} k_business Business key. Primary key from {@link \RsBusinessSql} table.
 * @returns {Wl_Log_LogBusinessDataModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */