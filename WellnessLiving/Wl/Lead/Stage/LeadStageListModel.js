/**
 * Gets a list of lead stages of the business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Lead_Stage_LeadStageListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Lead_Stage_LeadStageListModel_a_lead_stage
   * @property {number} i_order Sequence number of the stage in the list.
   * @property {number} i_user Number of clients who are in this stage. Only set in a case {@link Wl_Lead_Stage_LeadStageListModel.is_statistic} is `true`.
   * @property {number} id_lead_stage_shape Shape of the stage icon. One of {@link Wl_Lead_Stage_LeadStageShapeSid} constants.
   * @property {?number} id_lead_stage_system System-defined lead stage. One of {@link Wl_Lead_Stage_LeadStageSystemSid} constants. `null` for a custom stage created by the business.
   * @property {number} id_lead_stage_type Type of the stage. One of {@link Wl_Lead_Stage_LeadStageTypeSid} constants. The type is set when the stage is created and can not be changed afterwards.
   * @property {string} k_lead_stage Key of the stage.
   * @property {string} s_color_background Background color of the icon. Hexadecimal color.
   * @property {string} s_color_foreground Color of characters on the icon. Hexadecimal color.
   * @property {string} s_icon Characters on the icon.
   * @property {string} text_title Name of the stage.
   */

  /**
   * List of lead stages of the business. Ordered by `i_order`.
   *
   * @get result
   * @type {Wl_Lead_Stage_LeadStageListModel_a_lead_stage[]}
   */
  this.a_lead_stage = undefined;

  /**
   * Determines whether statistics of the stages must be returned.
   *
   * `true` to return the number of clients of every stage in `i_user`,
   * `false` to not return the statistics.
   *
   * @get get
   * @type {boolean}
   */
  this.is_statistic = false;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Lead_Stage_LeadStageListModel);

/**
 * @inheritDoc
 */
Wl_Lead_Stage_LeadStageListModel.prototype.config=function()
{
  return {"a_field":{"a_lead_stage":{"get":{"result":true}},"is_statistic":{"get":{"get":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Lead_Stage_LeadStageListModel.instanceGet
 * @param {string} k_business Business key.
 * @returns {Wl_Lead_Stage_LeadStageListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets a list of lead stages of the business.
 *
 * Returns all lead stages configured for the specified business, both system-defined and custom ones,
 * with their order, name and icon. In a case {@link Wl_Lead_Stage_LeadStageListModel.is_statistic} is `true`,
 * the number of clients of every stage is returned too.
 *
 * @function
 * @name Wl_Lead_Stage_LeadStageListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
