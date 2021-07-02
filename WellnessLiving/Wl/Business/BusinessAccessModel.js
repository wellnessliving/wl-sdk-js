/**
 * Information about business of giver staff member.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_BusinessAccessModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid";

  /**
   * Businesses where giver user is a staff member. Primary keys in table {@link \RsBusinessSql}.
   *
   * @get result
   * @type {string[]}
   */
  this.a_business = undefined;

  /**
   * User key.
   * Primary key in {@link PassportLoginSql} table.
   *
   * @get get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_BusinessAccessModel);

/**
 * @inheritDoc
 */
Wl_Business_BusinessAccessModel.prototype.config=function()
{
  return {"a_field": {"a_business": {"get": {"result": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Business_BusinessAccessModel.instanceGet
 * @param {string} uid User key. Primary key in {@link PassportLoginSql} table.
 * @returns {Wl_Business_BusinessAccessModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */