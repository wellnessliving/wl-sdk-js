/**
 * Returns list of classes and events in the business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Classes_ClassList_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,is_enrollment_block_all,is_franchise";

  /**
   * @typedef {{}} Wl_Classes_ClassList_ListModel_a_class
   * @property {string[]} a_class_tab List of class book now tabs, where this class is presented. Each element is   or `null` if class is presented in default system tab Classes. Events can also be added in class tabs.
   * @property {string[]} a_event_tab List of event book now tabs, where this event is presented. Each element is    or `null` if event is presented in default system tab Enrollments. Classes cannot be added in event tabs.
   * @property {string} dl_end The ending date of the class/event. Maybe a zero date if the class is ongoing (has no end date).
   * @property {string} dl_start The starting date of the class/event.
   * @property {boolean} is_active Whether class/event is active.
   * @property {boolean} is_event Define if current element is event.`true` - event, `false` - class.
   * @property {boolean} is_remove Whether class/event is removed.
   * @property {string} k_class Class/event identifier.
   * @property {string} k_enrollment_block Event Block ID.
   * @property {string} text_title Class/event name.
   */

  /**
   * List of classes and events.
   *
   * The result may depend on the following flags:
   * * [ListApi](/Wl/Classes/ClassList/List.json)
   * * [ListApi](/Wl/Classes/ClassList/List.json)
   *
   * Each element has the following structure:
   *
   * @get result
   * @type {Wl_Classes_ClassList_ListModel_a_class[]}
   */
  this.a_class = undefined;

  /**
   * List of tabs keys.
   * Filtering by Book Now Tab is not supported if [ListApi](/Wl/Classes/ClassList/List.json) is `true`.
   *
   * `null` if no filtering by Book Now Tab is required.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_class_tab = null;

  /**
   * ID of book now tab. One of {@link Wl_Classes_Tab_TabSid} constants.
   * Only {@link Wl_Classes_Tab_TabSid} and {@link Wl_Classes_Tab_TabSid} book now tab are supported.
   * Filtering by Book Now Tab is not supported if [ListApi](/Wl/Classes/ClassList/List.json) is `true`.
   *
   * `null` if no filtering by Book Now Tab is required.
   *
   * @get get
   * @see Wl_Classes_Tab_TabSid
   * @type {?number}
   */
  this.id_class_tab = null;

  /**
   * Whether all events should be returned from same enrollment block.
   *
   * * `true` to return all events from same enrollment block.
   * * `false` to return only one event from each enrollment block.
   *
   * Only published and non-empty events will be returned for the client.
   * To return empty events, use [ListApi](/Wl/Classes/ClassList/List.json).
   *
   * For the staff, filtering by publication or emptiness is not applied.
   *
   * @get get
   * @type {boolean}
   */
  this.is_enrollment_block_all = false;

  /**
   * Whether to include events without sessions.
   * An empty event is neither published nor unpublished. It simply has no sessions.
   * Such events can be useful for list filters.
   *
   * Affects clients only.
   * Does not affect staff. Staff always see empty events.
   *
   * Makes sense in conjunction with the flag [ListApi](/Wl/Classes/ClassList/List.json).
   *
   * * `true` to include events without sessions.
   * * `false` to exclude events without sessions.
   *
   * @get get
   * @type {boolean}
   */
  this.is_enrollment_block_empty = false;

  /**
   * Whether to include events in the result.
   *
   * true` to include both classes and events.
   * false` to include only classes.
   *
   * @get get
   * @type {boolean}
   */
  this.is_event_include = false;

  /**
   * Whether to return franchisee-created classes (if business is franchisor).
   * `true` to include franchisee-created classes.
   *
   * @get get
   * @type {boolean}
   */
  this.is_franchise = false;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Classes_ClassList_ListModel);

/**
 * @inheritDoc
 */
Wl_Classes_ClassList_ListModel.prototype.config=function()
{
  return {"a_field":{"a_class":{"get":{"result":true}},"a_class_tab":{"get":{"get":true}},"id_class_tab":{"get":{"get":true}},"is_enrollment_block_all":{"get":{"get":true}},"is_enrollment_block_empty":{"get":{"get":true}},"is_event_include":{"get":{"get":true}},"is_franchise":{"get":{"get":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Classes_ClassList_ListModel.instanceGet
 * @param {string} k_business Business key.
 * @param {boolean} is_enrollment_block_all Whether all events should be returned from same enrollment block. * `true` to return all events from same enrollment block. * `false` to return only one event from each enrollment block. Only published and non-empty events will be returned for the client. To return empty events, use [ListApi](/Wl/Classes/ClassList/List.json). For the staff, filtering by publication or emptiness is not applied.
 * @param {boolean} is_franchise Whether to return franchisee-created classes (if business is franchisor). `true` to include franchisee-created classes.
 * @returns {Wl_Classes_ClassList_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns list of classes and events in the business.
 *
 * Used by import and integration tools to enumerate all classes and events offered by a business.
 * In franchise mode, classes from all franchisee locations are included. Results are sorted by title
 * and start date.
 *
 * @function
 * @name Wl_Classes_ClassList_ListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
