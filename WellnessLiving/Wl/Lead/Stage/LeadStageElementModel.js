/**
 * Deletes a lead stage.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Lead_Stage_LeadStageElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Shape of the stage icon. One of {@link Wl_Lead_Stage_LeadStageShapeSid} constants.
   *
   * @get result
   * @post post
   * @put post
   * @see Wl_Lead_Stage_LeadStageShapeSid
   * @type {number}
   */
  this.id_lead_stage_shape = 0;

  /**
   * Type of the stage. One of {@link Wl_Lead_Stage_LeadStageTypeSid} constants.
   *
   * Only used to create a stage. Type of an existing stage can not be changed.
   *
   * @get result
   * @put post
   * @see Wl_Lead_Stage_LeadStageTypeSid
   * @type {number}
   */
  this.id_lead_stage_type = 0;

  /**
   * Business key.
   *
   * @delete get
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the lead stage.
   *
   * @delete get
   * @get get
   * @post get
   * @put result
   * @type {string}
   */
  this.k_lead_stage = "";

  /**
   * Key of the lead stage to move leads and clients of the deleted stage to.
   *
   * Required if the stage being deleted has leads or clients assigned to it. Ignored otherwise.
   * The replacement stage must be of the same {@link Wl_Lead_Stage_LeadStageTypeSid} as the deleted one.
   *
   * @delete get
   * @type {string}
   */
  this.k_lead_stage_replace = "";

  /**
   * Background color of the icon. Hexadecimal color.
   *
   * @get result
   * @post post
   * @put post
   * @type {string}
   */
  this.s_color_background = "";

  /**
   * Color of characters on the icon. Hexadecimal color.
   *
   * @get result
   * @post post
   * @put post
   * @type {string}
   */
  this.s_color_foreground = "";

  /**
   * Characters on the icon.
   *
   * Allowed length depends on {@link Wl_Lead_Stage_LeadStageElementModel.id_lead_stage_shape},
   * see {@link Wl_Lead_Stage_LeadStageShapeSid}.
   *
   * @get result
   * @post post
   * @put post
   * @type {string}
   */
  this.s_icon = "";

  /**
   * Name of the stage.
   *
   * @get result
   * @post post
   * @put post
   * @type {string}
   */
  this.text_title = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Lead_Stage_LeadStageElementModel);

/**
 * @inheritDoc
 */
Wl_Lead_Stage_LeadStageElementModel.prototype.config=function()
{
  return {"a_field":{"id_lead_stage_shape":{"get":{"result":true},"post":{"post":true},"put":{"post":true}},"id_lead_stage_type":{"get":{"result":true},"put":{"post":true}},"k_business":{"delete":{"get":true},"get":{"get":true},"post":{"get":true},"put":{"get":true}},"k_lead_stage":{"delete":{"get":true},"get":{"get":true},"post":{"get":true},"put":{"result":true}},"k_lead_stage_replace":{"delete":{"get":true}},"s_color_background":{"get":{"result":true},"post":{"post":true},"put":{"post":true}},"s_color_foreground":{"get":{"result":true},"post":{"post":true},"put":{"post":true}},"s_icon":{"get":{"result":true},"post":{"post":true},"put":{"post":true}},"text_title":{"get":{"result":true},"post":{"post":true},"put":{"post":true}}}};
};

/**
 * Deletes a lead stage.
 *
 * The last remaining stage of a type ({@link Wl_Lead_Stage_LeadStageTypeSid}) can not be deleted - a business must always have
 * at least one stage of every type. If the stage has leads or clients assigned,
 * {@link Wl_Lead_Stage_LeadStageElementModel.k_lead_stage_replace} must be given - they are moved to the replacement stage,
 * which must be of the same type.
 *
 * @function
 * @name Wl_Lead_Stage_LeadStageElementModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Returns information about a lead stage.
 *
 * The information includes the name, icon and type of the lead stage.
 *
 * @function
 * @name Wl_Lead_Stage_LeadStageElementModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Edits name and icon of a lead stage.
 *
 * Type of the stage ({@link Wl_Lead_Stage_LeadStageTypeSid}) is read-only and can not be changed.
 *
 * @function
 * @name Wl_Lead_Stage_LeadStageElementModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

/**
 * Creates a new custom lead stage.
 *
 * The name must be unique within the business and no longer than `TITLE_LENGTH_MAX`
 * characters. {@link Wl_Lead_Stage_LeadStageElementModel.id_lead_stage_type} is required and can not be changed afterwards.
 * A business may have no more than `STAGE_LIMIT` stages.
 *
 * @function
 * @name Wl_Lead_Stage_LeadStageElementModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
