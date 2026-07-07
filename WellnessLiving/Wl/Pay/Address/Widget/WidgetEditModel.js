/**
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Address_Widget_WidgetEditModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Address_Widget_WidgetEditModel);

/**
 * @inheritDoc
 */
Wl_Pay_Address_Widget_WidgetEditModel.prototype.config=function()
{
  return {"a_field":{}};
};
