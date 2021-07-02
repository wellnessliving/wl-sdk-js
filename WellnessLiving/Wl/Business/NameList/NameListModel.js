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
  this._s_key = "a_business";

  /**
   * List of business keys.
   * Each element is primary key for the {@link \RsBusinessSql} table.
   *
   * @post post
   * @type {{}}
   */
  this.a_business = [];

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

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_NameList_NameListModel);

/**
 * @inheritDoc
 */
Wl_Business_NameList_NameListModel.prototype.config=function()
{
  return {"a_field": {"a_business": {"post": {"post": true}},"a_business_error": {"post": {"result": true}},"a_business_name": {"post": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Business_NameList_NameListModel.instanceGet
 * @param {{}} a_business List of business keys. Each element is primary key for the {@link \RsBusinessSql} table.
 * @returns {Wl_Business_NameList_NameListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */