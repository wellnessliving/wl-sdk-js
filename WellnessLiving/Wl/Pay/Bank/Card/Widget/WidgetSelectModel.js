/**
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Bank_Card_Widget_WidgetSelectModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Bank_Card_Widget_WidgetSelectModel);

/**
 * @inheritDoc
 */
Wl_Pay_Bank_Card_Widget_WidgetSelectModel.prototype.config=function()
{
  return {"a_field":{}};
};
