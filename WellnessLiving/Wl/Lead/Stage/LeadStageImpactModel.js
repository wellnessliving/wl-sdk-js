/**
 * Finds out what moving the client into the lead stage is going to do.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Lead_Stage_LeadStageImpactModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Lead_Stage_LeadStageImpactModel_a_automation_start
   * @property {string} k_automation Automation key.
   * @property {string} text_title Name of the automation.
   */

  /**
   * Automations the client is added to by the change.
   *
   * @get result
   * @type {Wl_Lead_Stage_LeadStageImpactModel_a_automation_start[]}
   */
  this.a_automation_start = undefined;

  /**
   * @typedef {{}} Wl_Lead_Stage_LeadStageImpactModel_a_automation_stop
   * @property {string} k_automation Automation key.
   * @property {string} text_lead_stage_exit Name of the stage the automation moves the client into when the client leaves it. Empty string when the automation does not move clients anywhere.
   * @property {string} text_title Name of the automation.
   */

  /**
   * Automations the client is removed from by the change.
   *
   * @get result
   * @type {Wl_Lead_Stage_LeadStageImpactModel_a_automation_stop[]}
   */
  this.a_automation_stop = undefined;

  /**
   * Type of the stage the client is moved into. One of {@link Wl_Lead_Stage_LeadStageTypeSid} constants.
   *
   * @get result
   * @see Wl_Lead_Stage_LeadStageTypeSid
   * @type {number}
   */
  this.id_lead_stage_type = undefined;

  /**
   * Whether the change must be confirmed by the staff member.
   *
   * `true` if the change starts or stops an automation, or moves the client into a `Won` or `Lost` stage which
   * is counted by the Lead Management report. `false` if the change has no such effect and can be saved at once.
   *
   * @get result
   * @type {boolean}
   */
  this.is_confirm = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the lead stage to move the client into.
   *
   * @get get
   * @type {string}
   */
  this.k_lead_stage = "";

  /**
   * First name of the client, or the full name if the client has no first name.
   *
   * @get result
   * @type {string}
   */
  this.text_name_first = undefined;

  /**
   * Key of the client who is moved.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Lead_Stage_LeadStageImpactModel);

/**
 * @inheritDoc
 */
Wl_Lead_Stage_LeadStageImpactModel.prototype.config=function()
{
  return {"a_field":{"a_automation_start":{"get":{"result":true}},"a_automation_stop":{"get":{"result":true}},"id_lead_stage_type":{"get":{"result":true}},"is_confirm":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_lead_stage":{"get":{"get":true}},"text_name_first":{"get":{"result":true}},"uid":{"get":{"get":true}}}};
};

/**
 * Finds out what moving the client into the lead stage is going to do.
 *
 * @function
 * @name Wl_Lead_Stage_LeadStageImpactModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
