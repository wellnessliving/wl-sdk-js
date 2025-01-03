/**
 * API to get and update status of the left navigation panels and search field in the staff back office.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Page_Backend_ConfigModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Page_Backend_ConfigModel_a_map_state
   * @property {number} id_map Left navigation panel from {@link Wl_Page_Map_MapSid}.
   * @property {boolean} is_close bool `true` if panel is minimized, `false` - otherwise.
   */

  /**
   * Each element is about one panel in the left navigation. Any number of panels can be sent. All panels, which are not
   * sent, will not be changed.
   *
   * <dl>
   *   <dt>int <var>id_map</var></dt>
   *   <dd>Left navigation panel from {@link Wl_Page_Map_MapSid}.</dd>
   *   <dt>bool <var>is_close</var></dt>
   *   <dd>bool `true` if panel is minimized, `false` - otherwise.</dd>
   * </dl>
   *
   * `null` to not change current setting in put requests.
   *
   * @get result
   * @put post
   * @type {?Wl_Page_Backend_ConfigModel_a_map_state[]}
   */
  this.a_map_state = null;

  /**
   * `true` if search field is locked in opened mode.
   * `false` if search field is closed until user clicks on it.
   * `null` to not change current setting in put requests.
   *
   * @get result
   * @put post
   * @type {?boolean}
   */
  this.is_search_lock = null;

  /**
   * Key of the business, where we want to change staff back office settings.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Page_Backend_ConfigModel);

/**
 * @inheritDoc
 */
Wl_Page_Backend_ConfigModel.prototype.config=function()
{
  return {"a_field": {"a_map_state": {"get": {"result": true},"put": {"post": true}},"is_search_lock": {"get": {"result": true},"put": {"post": true}},"k_business": {"get": {"get": true},"put": {"get": true}}}};
};