/**
 * Api for editing class tab.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Classes_Tab_ClassTabModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * ID of class tab object. One of {@link \Wl\Classes\Tab\TabSid} constants.
   * <tt>null</tt> to hide class tab.
   *
   * @post post
   * @type {?number}
   */
  this.id_class_tab_object = null;

  /**
   * Id of class tab type if this class tab is system default. One of {@link \Wl\Classes\Tab\TabSid} constants.
   * <tt>null</tt> to hide class tab or if class tab is not system default.
   *
   * @post post
   * @type {?number}
   */
  this.id_class_tab_system = null;

  /**
   * Business key. Primary key in the {@link \RsBusinessSql} table.
   * <tt>null</tt> to hide class tab.
   *
   * @post post
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Class tab key. Primary key in the {@link \Wl\Classes\Tab\Sql\ClassTab\Sql} table.
   * <tt>null</tt> to create new class tab.
   *
   * @delete get
   * @post get,result
   * @type {?string}
   */
  this.k_class_tab = null;

  /**
   * Class tab title.
   * <tt>null</tt> to hide class tab.
   *
   * @post post
   * @type {?string}
   */
  this.text_title = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Classes_Tab_ClassTabModel);

/**
 * @inheritDoc
 */
Wl_Classes_Tab_ClassTabModel.prototype.config=function()
{
  return {"a_field": {"id_class_tab_object": {"post": {"post": true}},"id_class_tab_system": {"post": {"post": true}},"k_business": {"post": {"post": true}},"k_class_tab": {"delete": {"get": true},"post": {"get": true,"result": true}},"text_title": {"post": {"post": true}}}};
};