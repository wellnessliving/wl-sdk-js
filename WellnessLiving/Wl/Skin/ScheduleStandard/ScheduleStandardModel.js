/**
 * API point to get data about standard schedule customization.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Skin_ScheduleStandard_ScheduleStandardModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Skin data.
   * Result of the {@link \RsSkinData::skin()} method.
   *
   * @get result
   * @type {{}}
   */
  this.a_skin = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Skin_ScheduleStandard_ScheduleStandardModel);

/**
 * @inheritDoc
 */
Wl_Skin_ScheduleStandard_ScheduleStandardModel.prototype.config=function()
{
  return {"a_field": {"a_skin": {"get": {"result": true}}}};
};