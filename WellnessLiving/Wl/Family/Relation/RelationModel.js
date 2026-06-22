/**
 * Returns data about a user's relationships.
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
   * @property {number} id_family_relation The relationship type. One of the {@link Wl_Family_Relation_RelationSid} constants.
   * @property {string} uid The related user's key.
   */

  /**
   * The new relationship to be added to user, specified with {@link Wl_Family_Relation_RelationModel.uid}:
   * <dl>
   *   <dt>int <var>id_family_relation</var></dt>
   *   <dd>The relationship type. One of the {@link Wl_Family_Relation_RelationSid} constants.</dd>
   *   <dt>string <var>uid</var></dt>
   *   <dd>The related user's key.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Family_Relation_RelationModel_a_new}
   */
  this.a_new = [];

  /**
   * @typedef {{}} Wl_Family_Relation_RelationModel_a_relation
   * @property {number} id_family_relation The relationship type. One of the {@link Wl_Family_Relation_RelationSid} constants.
   * @property {number} id_family_relation_reverse The type of reciprocated relationship. One of the {@link Wl_Family_Relation_RelationSid} constants.
   * @property {string} text_name The name of the relation.
   * @property {string} text_name_first The first name of the relation.
   * @property {string} uid The key of the related user.
   */

  /**
   * Information about the user's relationships. Every element has the following fields:
   * <dl>
   *   <dt>int <var>id_family_relation</var></dt>
   *   <dd>The relationship type. One of the {@link Wl_Family_Relation_RelationSid} constants.</dd>
   *   <dt>int <var>id_family_relation_reverse</var></dt>
   *   <dd>The type of reciprocated relationship. One of {@link Wl_Family_Relation_RelationSid} constants.</dd>
   *   <dt>string <var>text_name</var></dt>
   *   <dd>The name of the relation.</dd>
   *   <dt>string <var>text_name_first</var></dt>
   *   <dd>The first name of the relation.</dd>
   *   <dt>string <var>uid</var></dt>
   *   <dd>The key of the related user.</dd>
   * </dl>
   *
   * @delete result
   * @get result
   * @post result
   * @type {Wl_Family_Relation_RelationModel_a_relation[]}
   */
  this.a_relation = undefined;

  /**
   * ID of the user behavior flow.
   * One of {@link Wl_User_Tracking_FlowSid} constants.
   *
   * @delete get
   * @get get
   * @post get
   * @type {number}
   */
  this.id_flow = 0;

  /**
   * ID of source mode.
   * One of {@link Wl_Mode_ModeSid} constants.
   *
   * @delete post
   * @post post
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * The business key.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The key of the user whose relationships are being assessed.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  /**
   * The key of the related user who {@link Wl_Family_Relation_RelationModel.uid} must be removed.
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
  return {"a_field": {"a_new": {"post": {"post": true}},"a_relation": {"delete": {"result": true},"get": {"result": true},"post": {"result": true}},"id_flow": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"id_mode": {"delete": {"post": true},"post": {"post": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"uid": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"uid_delete": {"delete": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Family_Relation_RelationModel.instanceGet
 * @param {string} uid The key of the user whose relationships are being assessed.
 * @param {string} k_business The business key.
 * @returns {Wl_Family_Relation_RelationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */