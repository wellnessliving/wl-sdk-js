/**
 * Returns business' enabled relationship types.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Family_Relation_FamilyRelationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Family_Relation_FamilyRelationModel_a_business_relationships
   */

  /**
   * The relationship types in the business.
   *
   * Key is ID, value is SID. See {@link Wl_Family_Relation_RelationSid}.
   *
   * @get result
   * @type {Wl_Family_Relation_FamilyRelationModel_a_business_relationships}
   */
  this.a_business_relationships = [];

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extends(Wl_Family_Relation_FamilyRelationModel);

/**
 * @inheritDoc
 */
Wl_Family_Relation_FamilyRelationModel.prototype.config=function()
{
  return {"a_field": {"a_business_relationships": {"get": {"result": true}}},"k_business": {"get": {"get": true}}};
};

/**
 * @function
 * @name Wl_Family_Relation_FamilyRelationModel.instanceGet
 * @param {string} k_business The business key.
 * @returns {Wl_Family_Relation_FamilyRelationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */