/**
 * Returns tags of the specified business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Tag_TagListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Tag_TagListModel_a_list
   * @property {number} i_sort The sort order of the tag.
   * @property {string} k_tag The tag key.
   * @property {string} text_title The tag title.
   */

  /**
   * The tag list.
   *
   * Each element has the next structure:
   *
   * @get result
   * @post post,result
   * @type {Wl_Tag_TagListModel_a_list[]}
   */
  this.a_list = undefined;

  /**
   * Whether a business did set up a penalty fee for failed automatic payments.
   *
   * @get result
   * @type {boolean}
   */
  this.has_fee = undefined;

  /**
   * Whether a business did set up surcharges.
   *
   * @get result
   * @type {boolean}
   */
  this.has_surcharge = undefined;

  /**
   * List of tags in json format.
   * See {@link Wl_Tag_TagListModel.a_list} for the structure of each tag.
   * `null` to use {@link Wl_Tag_TagListModel.a_list} for getting the tag list.
   *
   * @post post
   * @type {?string}
   */
  this.json_list = null;

  /**
   * The business key of the tags.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Tag_TagListModel);

/**
 * @inheritDoc
 */
Wl_Tag_TagListModel.prototype.config=function()
{
  return {"a_field":{"a_list":{"get":{"result":true},"post":{"post":true,"result":true}},"has_fee":{"get":{"result":true}},"has_surcharge":{"get":{"result":true}},"json_list":{"post":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Tag_TagListModel.instanceGet
 * @param {string} k_business The business key of the tags.
 * @returns {Wl_Tag_TagListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns tags of the specified business.
 *
 * Returns all client tags configured for the business in display order, along with flags
 * indicating whether the business has configured a penalty fee for failed automatic payments
 * and whether surcharges are enabled. Used to populate tag pickers and client profile forms.
 *
 * @function
 * @name Wl_Tag_TagListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves the list of tags.
Can be used to create new tags or update existing ones.
 *
 * Persists the given set of client tags for the business. Tags without a key are created;
 * tags with an existing key are updated with the new title. Requires backend access.
 *
 * @function
 * @name Wl_Tag_TagListModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
