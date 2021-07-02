/**
 * Manage classes info with Api.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Classes_Type_Index_Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of active class types:
   * <ul>
   *   <li>string <var>description</var> Class type description.
   *   </li>
   *   <li>int <var>id</var> Class type ID.
   *   </li>
   *   <li>string <var>title</var> Class type title.
   *   </li>
   * </ul>
   *
   * @get result
   * @type {{}}
   */
  this.class_types = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Classes_Type_Index_Model);

/**
 * @inheritDoc
 */
Wl_Classes_Type_Index_Model.prototype.config=function()
{
  return {"a_field": {"class_types": {"get": {"result": true}}}};
};