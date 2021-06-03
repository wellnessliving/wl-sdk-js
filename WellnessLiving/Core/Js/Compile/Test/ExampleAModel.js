/**
 * Example API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Js_Compile_Test_ExampleAModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Core_Js_Compile_Test_ExampleAModel_a_list_a_item
   * @property {string} text_title Example title.
   * @property {string} k_id Example key.
   */
  /**
   * @typedef {{}} Core_Js_Compile_Test_ExampleAModel_a_list
   * @property {Core_Js_Compile_Test_ExampleAModel_a_list_a_item[]} a_item List of items.
   * <dl>
   *   <dt>string <tt>text_title</tt></dt>
   *   <dd>Example title.</dd>
   *   <dt>string <tt>k_id</tt></dt>
   *   <dd>Example key.</dd>
   * </dl>
   * @property {boolean} is_enable Example boolean
   */

  /**
   * Example result. <dl>
   *   <dt>array[] <var>a_item</var></dt>
   *   <dd>
   *     List of items.
   *     <dl>
   *       <dt>string <var>text_title</var></dt>
   *       <dd>Example title.</dd>
   *       <dt>string <var>k_id</var></dt>
   *       <dd>Example key.</dd>
   *     </dl>
   *   </dd>
   *   <dt>bool <var>is_enable</var></dt>
   *   <dd>Example boolean</dd>
   * </dl>
   *
   * @get result
   * @type {Core_Js_Compile_Test_ExampleAModel_a_list[]}
   */
  this.a_list = undefined;

  /**
   * Example integer.
   *
   * @get get
   * @type {number}
   */
  this.i_page = 1;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Js_Compile_Test_ExampleAModel);

/**
 * @inheritDoc
 */
Core_Js_Compile_Test_ExampleAModel.prototype.config=function()
{
  return {"a_field": {"a_list": {"get": {"result": true}},"i_page": {"get": {"get": true}}}};
};