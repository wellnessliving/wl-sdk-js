/**
 * Data about user's family.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Family_Relation_RelationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * @typedef {{}} Wl_Family_Relation_RelationModel_a_new
   * @property {number} id_family_relation Type of family relation. One of {@link \RsFamilyRelationSid} constants.
   * @property {string} uid User's ID. Primary key in {@link \PassportLoginSql} table.
   */

  /**
   * New relative to be added to user {@link \Wl\Family\Relation\RelationApi::$uid}:
   * <dl>
   *   <dt>int <var>id_family_relation</var></dt>
   *   <dd>Type of family relation. One of {@link \RsFamilyRelationSid} constants.</dd>
   *   <dt>string <var>uid</var></dt>
   *   <dd>User's ID. Primary key in {@link \PassportLoginSql} table.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Family_Relation_RelationModel_a_new}
   */
  this.a_new = [];

  /**
   * Information about user's family relations. Every element has next fields:
   * <ul>
   *   <li>int <tt>id_family_relation</tt> Type of family relation. One of {@link RsFamilyRelationSid} constants.</li>
   * </ul>
   *
   * @delete result
   * @get result
   * @post result
   * @type {{}[]}
   */
  this.a_relation = undefined;

  /**
   * ID of business to get information for. Primary key in {@link \RsBusinessAr} table.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * User whose relatives we have to work with.
   * Primary key in {@link \PassportLoginSql} table.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  /**
   * User relation between who and user {@link \Wl\Family\Relation\RelationApi::$uid} must be removed.
   * Primary key in {@link \PassportLoginSql} table.
   *
   * @delete get
   * @type {string}
   */
  this.uid_delete = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Family_Relation_RelationModel);

/**
 * @inheritDoc
 */
Wl_Family_Relation_RelationModel.prototype.config=function()
{
  return {"a_field": {"a_new": {"post": {"post": true}},"a_relation": {"delete": {"result": true},"get": {"result": true},"post": {"result": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"uid": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"uid_delete": {"delete": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Family_Relation_RelationModel.instanceGet
 * @param {string} uid User whose relatives we have to work with. Primary key in {@link \PassportLoginSql} table.
 * @param {string} k_business ID of business to get information for. Primary key in {@link \RsBusinessAr} table.
 * @returns {Wl_Family_Relation_RelationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */