/**
 * Manage actions of sms history report.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_Config_ConfigDefaultModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * ID of the predefined set of filters on the schedule.
   *
   * @post post
   * @type {boolean}
   */
  this.is_default = undefined;

  /**
   * ID of the predefined set of filters on the schedule.
   *
   * @post get
   * @type {string}
   */
  this.k_schedule_config = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_Config_ConfigDefaultModel);

/**
 * @inheritDoc
 */
Wl_Schedule_Config_ConfigDefaultModel.prototype.config=function()
{
  return {"a_field": {"is_default": {"post": {"post": true}},"k_schedule_config": {"post": {"get": true}}}};
};