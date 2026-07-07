/**
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Generator_QueryModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_Generator_QueryModel);

/**
 * @inheritDoc
 */
Wl_Report_Generator_QueryModel.prototype.config=function()
{
  return {"a_field":{}};
};
