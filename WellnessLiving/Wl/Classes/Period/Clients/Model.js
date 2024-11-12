/**
 * Class to manage class period info with Api.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Classes_Period_Clients_Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of clients that registered on class each element contains information:
   * <ul>
   *   <li>array <var>asset</var> A list of the assets.<dl>
   *     <dt>string <var>k_resource</var></dt><dd>Resource key.</dd>
   *     <dt>string <var>text_name</var></dt>
   *     <dd>Asset title that consists of the asset title itself concatenated with its index (in case of multiple assets) by '#'.</dd>
   *     <dt>string <var>text_title</var></dt><dd>Title of the asset.</dd>
   *   </dl>
   *   </li>
   *   <li>string <var>first_name</var> Client's first name.
   *   </li>
   *   <li>string <var>gender</var> Gender of client. String representation of constants {@link Wl_Gender_GenderSid}.
   *   </li>
   *   <li>string <var>last_name</var> Client's last name.
   *   </li>
   *   <li>string <var>mail</var> Mail of client.
   *   </li>
   *   <li>string <var>name</var> Full name. Combination of the first and last names.
   *   </li>
   *   <li>bool <var>pass_prospect</var> Whether client used Pass Promote to visit class.
   *   </li>
   *   <li>string <var>phone</var> Phone number of client.
   *   </li>
   *   <li>int <var>uid</var> User identifier.
   *   </li>
   *   <li>string <var>visit</var> State of visit. String representation of constants {@link Wl_Visit_VisitSid}.
   *   </li>
   * </ul>
   *
   * @get result
   * @type {{}[]}
   */
  this.clients = undefined;

  /**
   * Date and time of the currently viewed attendance list.
   *
   * @get get
   * @type {string}
   */
  this.dtl_date = undefined;

  /**
   * Whether only clients from <tt>Classpass</tt> should be returned.
   *
   * @get get
   * @type {boolean}
   */
  this.is_classpass_only = undefined;

  /**
   * Class period key of the attendance list.
   *
   * @get get
   * @type {string}
   */
  this.k_class_period = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Classes_Period_Clients_Model);

/**
 * @inheritDoc
 */
Wl_Classes_Period_Clients_Model.prototype.config=function()
{
  return {"a_field": {"clients": {"get": {"result": true}},"dtl_date": {"get": {"get": true}},"is_classpass_only": {"get": {"get": true}},"k_class_period": {"get": {"get": true}}}};
};