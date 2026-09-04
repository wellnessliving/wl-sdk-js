/**
 * Sets the lead stage of the client.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Lead_Stage_LeadStageUserModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business key.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the lead stage to move the client into.
   *
   * @post post
   * @type {string}
   */
  this.k_lead_stage = "";

  /**
   * Key of the client whose stage is set.
   *
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
  return {"a_field":{"k_business":{"post":{"get":true}},"k_lead_stage":{"post":{"post":true}},"uid":{"post":{"get":true}}}};
};

/**
 * Sets the lead stage of the client.
 *
 * If the client is already in this stage, nothing is changed.
 *
 * @function
 * @name Wl_Lead_Stage_LeadStageUserModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
