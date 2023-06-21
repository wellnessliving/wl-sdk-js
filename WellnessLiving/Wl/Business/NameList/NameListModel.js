/**
 * List of business names.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_NameList_NameListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "s_business";

  /**
   * List of business keys that are incorrect.
   *
   * @post result
   * @type {{}}
   */
  this.a_business_error = undefined;

  /**
   * Each field is a business key, the primary key in the {@link \RsBusinessSql} table. Each value is the business name.
   *
   * @post result
   * @type {{}}
   */
  this.a_business_name = undefined;

  /**
   * Array of business keys, encoded to string to get names for.
   * Each element is a primary key in the {@link \RsBusinessSql} table.
   *
   * @post post
   * @type {string}
   */
  this.s_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_NameList_NameListModel);

/**
 * @inheritDoc
 */
Wl_Business_NameList_NameListModel.prototype.config=function()
{
  return {"a_field": {"a_business_error": {"post": {"result": true}},"a_business_name": {"post": {"result": true}},"s_business": {"post": {"post": true}}}};
};

/**
 * @function
 * @name Wl_Business_NameList_NameListModel.instanceGet
 * @param {string} s_business Array of business keys, encoded to string to get names for. Each element is a primary key in the {@link \RsBusinessSql} table.
 * @returns {Wl_Business_NameList_NameListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */