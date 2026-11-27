/**
 * Gets the lead stage of the client.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Lead_Stage_LeadStageUserModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Whether the current user may change the lead stage of the client.
   *
   * `true` if the user has the privilege to change the lead stage ({@link Wl_Privilege_PrivilegeSid}) in
   * the business, or is an administrator of the client profiles. `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.can_lead_stage_change = undefined;

  /**
   * Business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the lead stage.
   *
   * When the stage is set, the stage to move the client into. When the stage is read, the stage the client is in
   * now. A client without a stored stage, or with a stored stage which is not one of the stages of the business, is
   * in the default stage of the business, the same stage as the profile of the client shows. An empty string only if
   * the business has no stages.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.k_lead_stage = "";

  /**
   * Key of the client whose stage is read or set.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Lead_Stage_LeadStageUserModel);

/**
 * @inheritDoc
 */
Wl_Lead_Stage_LeadStageUserModel.prototype.config=function()
{
  return {"a_field":{"can_lead_stage_change":{"get":{"result":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_lead_stage":{"get":{"result":true},"post":{"post":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * Gets the lead stage of the client.
 *
 * The current user must be allowed to view the profile of the client, as for the profile page of the client (the
 * privilege to view client profiles and the access to the client), and the client must be one whom the user may see
 * in this business: a client of the business, or a franchise client by the rules of the franchise. A client without a
 * stored stage which is not one of the stages of the business, is in the default stage of the business, and that
 * stage is returned. An empty string is returned only if the business has no stages.
 *
 * Also tells whether the current user may change the stage of the client.
 *
 * @function
 * @name Wl_Lead_Stage_LeadStageUserModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Sets the lead stage of the client.
 *
 * If the client is already in this stage, nothing is changed.
 *
 * The staff member needs the privilege to change the lead stage ({@link Wl_Privilege_PrivilegeSid}). The
 * privilege to manage client profiles does not give it.
 *
 * @function
 * @name Wl_Lead_Stage_LeadStageUserModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
