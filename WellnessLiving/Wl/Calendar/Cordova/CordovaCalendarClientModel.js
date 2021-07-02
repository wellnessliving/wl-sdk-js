/**
 * Entry point for synchronization of client's calendar.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Calendar_Cordova_CordovaCalendarClientModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Events that must be synchronized in calendar. See {@link CordovaCalendarApiAbstract::data()} for detailed description.
   *
   * @post result
   * @type {{}[]}
   */
  this.a_visit_actual = undefined;

  /**
   * Date of last sync.
   *
   * @post get
   * @type {string}
   */
  this.dtu_synced_last = undefined;

  /**
   * Business to synchronize calendar from.
   * Primary key in {@link \RsBusinessSql} table.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Books/visits that are already synchronized in client's calendar.
   * Serialized list of pairs [[visit key ({@link \RsVisitSql}) => visit hash], ...].
   *
   * @post post
   * @type {string}
   */
  this.s_visit_synced = "";

  /**
   * User to synchronize calendar for.
   * Primary key in {@link \PassportLoginSql} table.
   *
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Calendar_Cordova_CordovaCalendarClientModel);

/**
 * @inheritDoc
 */
Wl_Calendar_Cordova_CordovaCalendarClientModel.prototype.config=function()
{
  return {"a_field": {"a_visit_actual": {"post": {"result": true}},"dtu_synced_last": {"post": {"get": true}},"k_business": {"post": {"get": true}},"s_visit_synced": {"post": {"post": true}},"uid": {"post": {"get": true}}}};
};