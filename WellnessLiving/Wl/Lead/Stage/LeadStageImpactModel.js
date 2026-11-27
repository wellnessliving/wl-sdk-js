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
   * @property {string} text_description Description of the automation. Empty string if the automation has no description.
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
   * @property {string} text_description Description of the automation. Empty string if the automation has no description.
   * @property {string} text_lead_stage_exit Name of the stage the automation moves the client into when the client leaves it. Empty string when the automation does not move clients anywhere, when the client is already in that stage after the change, or when the move is backward and the automation does not allow it.
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
   * Whether the business has client groups which convert their clients into a `Won` or `Lost` stage.
   *
   * Such groups never change a stage which a staff member set by hand, so the staff member may be told about it.
   * Always `false` for a stage of another type, and for a business without the Marketing Suite subscription,
   * because the groups do not convert clients then.
   *
   * @get result
   * @type {boolean}
   */
  this.is_member_group = undefined;

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
   * Name of the lead stage the client is moved into.
   *
   * @get result
   * @type {string}
   */
  this.text_title = undefined;

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
  return {"a_field":{"a_automation_start":{"get":{"result":true}},"a_automation_stop":{"get":{"result":true}},"id_lead_stage_type":{"get":{"result":true}},"is_confirm":{"get":{"result":true}},"is_member_group":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_lead_stage":{"get":{"get":true}},"text_name_first":{"get":{"result":true}},"text_title":{"get":{"result":true}},"uid":{"get":{"get":true}}}};
};

/**
 * Finds out what moving the client into the lead stage is going to do.
 *
 * The client must not be in the stage yet. The caller is expected to ask only about a stage the client is not in yet.
 * The client must be a member of the business, or a franchise client of it: a traveller or an enterprise client.
 * The access to the profile of the client is not checked, because the Lead Management report and the Recent Leads
 * widget call this check too, and a check of the profile could block a stage change that they allow now.
 *
 * @function
 * @name Wl_Lead_Stage_LeadStageImpactModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
