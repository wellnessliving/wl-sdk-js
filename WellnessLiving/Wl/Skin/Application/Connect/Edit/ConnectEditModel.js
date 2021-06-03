/**
 * Class for send test push.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Skin_Application_Connect_Edit_ConnectEditModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Data for send push.
   *
   * @post post
   * @type {{}}
   */
  this.a_push = undefined;

  /**
   * Message push.
   *
   * @post post
   * @type {string}
   */
  this.s_message = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Skin_Application_Connect_Edit_ConnectEditModel);

/**
 * @inheritDoc
 */
Wl_Skin_Application_Connect_Edit_ConnectEditModel.prototype.config=function()
{
  return {"a_field": {"a_push": {"post": {"post": true}},"s_message": {"post": {"post": true}}}};
};