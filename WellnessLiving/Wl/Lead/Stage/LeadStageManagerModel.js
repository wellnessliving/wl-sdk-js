/**
 * Returns the setting "Lead stages are managed by".
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Lead_Stage_LeadStageManagerModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * Who manages the lead stages of the locations of the Enterprise. One of {@link Wl_Lead_Stage_LeadStageManagerSid} constants.
   *
   * {@link Wl_Lead_Stage_LeadStageManagerSid} by default.
   *
   * @get result
   * @post post
   * @see Wl_Lead_Stage_LeadStageManagerSid
   * @type {number}
   */
  this.id_lead_stage_manager = 1;

  /**
   * Key of the Enterprise Headquarters business.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Lead_Stage_LeadStageManagerModel);

/**
 * @inheritDoc
 */
Wl_Lead_Stage_LeadStageManagerModel.prototype.config=function()
{
  return {"a_field":{"id_lead_stage_manager":{"get":{"result":true},"post":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Lead_Stage_LeadStageManagerModel.instanceGet
 * @param {string} k_business Key of the Enterprise Headquarters business.
 * @returns {Wl_Lead_Stage_LeadStageManagerModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the setting "Lead stages are managed by".
 *
 * The setting tells who manages the lead stages of the locations of the Enterprise that received a push of the
 * lead stages: each location or the Enterprise Headquarters. It is visible to every staff member who can open the
 * Leads settings and to every staff member who can manage the business.
 *
 * @function
 * @name Wl_Lead_Stage_LeadStageManagerModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves the setting "Lead stages are managed by".
 *
 * Changing the setting takes effect at every location that received a push of the lead stages, and no new push is
 * needed. The change is written to the Edit Log of the business. Only a staff member who can manage the business
 * settings can change the setting.
 *
 * @function
 * @name Wl_Lead_Stage_LeadStageManagerModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
