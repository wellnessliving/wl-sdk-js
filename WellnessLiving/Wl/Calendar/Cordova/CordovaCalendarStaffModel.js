/**
 * Gets schedule for calendar synchronisation.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Calendar_Cordova_CordovaCalendarStaffModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Calendar_Cordova_CordovaCalendarStaffModel_a_visit_actual
   * @property {string} dtl_end Date/time of end. Set if event is not cancelled.
   * @property {string} dtl_start Date/time of start. Set if event is not cancelled.
   * @property {boolean} is_cancel `true` - event is cancelled; `false` - event still actual.
   * @property {string} s_hash Check sum. Set if event is not cancelled.
   * @property {string} s_key Event unique ID.
   * @property {string} text_location Location address. Set if event is not cancelled.
   * @property {string} text_note Additional description. Set if event is not cancelled.
   * @property {string} text_title Title. Set if event is not cancelled.
   * @property {string} url URL to join virtual service. Set if event is not cancelled. Empty string if service is not virtual.
   */

  /**
   * Events that must be synchronized in calendar. See `data()` for detailed description.
   *
   * @post result
   * @type {Wl_Calendar_Cordova_CordovaCalendarStaffModel_a_visit_actual[]}
   */
  this.a_visit_actual = undefined;

  /**
   * Date of last sync.
   *
   * @post get
   * @type {string}
   */
  this.dtu_synced_last = "";

  /**
   * Business to synchronize calendar from.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Books/visits that are already synchronized in client's calendar.
   * Serialized list of pairs [[visit key () => visit hash], ...].
   *
   * @post post
   * @type {string}
   */
  this.s_visit_synced = "";

  /**
   * User to synchronize calendar for.
   *
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Calendar_Cordova_CordovaCalendarStaffModel);

/**
 * @inheritDoc
 */
Wl_Calendar_Cordova_CordovaCalendarStaffModel.prototype.config=function()
{
  return {"a_field":{"a_visit_actual":{"post":{"result":true}},"dtu_synced_last":{"post":{"get":true}},"k_business":{"post":{"get":true}},"s_visit_synced":{"post":{"post":true}},"uid":{"post":{"get":true}}}};
};

/**
 * Gets schedule for calendar synchronisation.
 *
 * POST method is used instead GET because the `$s_visit_synced` field value
 * may be more than allowed for GET.
 *
 * @function
 * @name Wl_Calendar_Cordova_CordovaCalendarStaffModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
