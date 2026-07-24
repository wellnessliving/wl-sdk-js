/**
 * Returns data for group edit form.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Member_Group_Edit_EditModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Member_Group_Edit_EditModel_a_criteria
   * @property {number} cid_search_criteria Search criteria CID. Constant from {@link Wl_Search_Criteria_SearchCriteriaAbstract} subclasses.
   * @property {number} id_operation ID of selected operation. Constant from {@link Wl_Search_SearchOperationSid}.
   * @property {string} s_id Unique criteria key.
   * @property {string} x_value Operation data value.
   */

  /**
   * Entity in array format.
   *
   * @deprecated Use `json_criteria` to prevent number of variables more than
 can be transferred to server via HTTP.
   * @post post
   * @put post
   * @type {Wl_Member_Group_Edit_EditModel_a_criteria[]}
   */
  this.a_criteria = undefined;

  /**
   * Logic connection between criteria.
   * See `a_criteria_logic` for details.
   *
   * @post post
   * @put post
   * @type {?string[][][][]}
   */
  this.a_logic = null;

  /**
   * Search entity CID list.
   * Constants from {@link Wl_Search_SearchEntityAbstract} subclasses.
   *
   * @post post
   * @put post
   * @type {number[]}
   */
  this.a_search_entity = undefined;

  /**
   * @typedef {{}} Wl_Member_Group_Edit_EditModel_a_staff_role_selected
   * @property {?number} id_privilege_role ID of privilege role. Constant from {@link RsPrivilegeRoleSid}.
   * @property {string} k_business_role Key of the business role.
   */

  /**
   * Selected staff roles of the search template.
   *
   * @post post
   * @put post
   * @type {Wl_Member_Group_Edit_EditModel_a_staff_role_selected[]}
   */
  this.a_staff_role_selected = undefined;

  /**
   * Lead conversion type.
   * `null` if this group is not used for to track lead conversion.
   *
   * @get result
   * @post post
   * @see Wl_Lead_Conversion_LeadConversionTypeSid
   * @type {?number}
   */
  this.id_conversion_type = null;

  /**
   * Shape of icon. One of {@link Wl_Member_Group_ShapeSid} constants.
   *
   * @get result
   * @post post
   * @put post
   * @see Wl_Member_Group_ShapeSid
   * @type {number}
   */
  this.id_member_group_shape = 0;

  /**
   * Type of share option.
   * One of {@link Wl_Share_ShareSid} constants.
   *
   * @post post
   * @put post
   * @see Wl_Share_ShareSid
   * @type {number}
   */
  this.id_share = 0;

  /**
   * Whether Facility Access enabled for group.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_brivo_active = false;

  /**
   * Whether automatic check-in on Brivo access granted is enabled for the group.
   * When enabled, a successful Brivo door access reported for a client of this group triggers an automatic
   *  check-in attempt in WellnessLiving. When disabled, Brivo access events for these clients are ignored.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_brivo_checkin_active = false;

  /**
   * Whether Brivo invitation feature enabled for the group.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_brivo_invitation_active = false;

  /**
   * `true` to enable group icon. `false` to disable.
   *
   * @get result
   * @post post
   * @put post
   * @type {boolean}
   */
  this.is_icon = false;

  /**
   * Whether auto-update enabled for group.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_update = false;

  /**
   * Entity in array format.
   * Alternative of `a_criteria` to transfer data via HTTP as one variable.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.json_criteria = "[]";

  /**
   * The business key.
   *
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Member group key.
   *
   * @get get
   * @post get,result
   * @put get
   * @type {string}
   */
  this.k_member_group = "";

  /**
   * Key of existing template.
   *
   * Can be empty if template needs to be created.
   *
   * @get get,result
   * @post get,result
   * @put get
   * @type {string}
   */
  this.k_search_template = "";

  /**
   * Hexadecimal color of icon background.
   *
   * @get result
   * @post post
   * @put post
   * @type {string}
   */
  this.s_color_background = "";

  /**
   * Hexadecimal color of icon foreground.
   *
   * @get result
   * @post post
   * @put post
   * @type {string}
   */
  this.s_color_foreground = "";

  /**
   * Characters on icon.
   *
   * @get result
   * @post post
   * @put post
   * @type {string}
   */
  this.s_icon = "";

  /**
   * Unique string identifying the name of the search group.
   *
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.s_search_group = "";

  /**
   * Title for a client group.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_title = "";

  /**
   * Additional warning message if there were some minor issues with request.
   *
   * @post result
   * @put result
   * @type {?string}
   */
  this.text_warning = null;

  /**
   * User key.
   *
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Member_Group_Edit_EditModel);

/**
 * @inheritDoc
 */
Wl_Member_Group_Edit_EditModel.prototype.config=function()
{
  return {"a_field":{"a_criteria":{"post":{"post":true},"put":{"post":true}},"a_logic":{"post":{"post":true},"put":{"post":true}},"a_search_entity":{"post":{"post":true},"put":{"post":true}},"a_staff_role_selected":{"post":{"post":true},"put":{"post":true}},"id_conversion_type":{"get":{"result":true},"post":{"post":true}},"id_member_group_shape":{"get":{"result":true},"post":{"post":true},"put":{"post":true}},"id_share":{"post":{"post":true},"put":{"post":true}},"is_brivo_active":{"get":{"result":true},"post":{"post":true}},"is_brivo_checkin_active":{"get":{"result":true},"post":{"post":true}},"is_brivo_invitation_active":{"get":{"result":true},"post":{"post":true}},"is_icon":{"get":{"result":true},"post":{"post":true},"put":{"post":true}},"is_update":{"get":{"result":true},"post":{"post":true}},"json_criteria":{"post":{"post":true},"put":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true},"put":{"get":true}},"k_member_group":{"get":{"get":true},"post":{"get":true,"result":true},"put":{"get":true}},"k_search_template":{"get":{"get":true,"result":true},"post":{"get":true,"result":true},"put":{"get":true}},"s_color_background":{"get":{"result":true},"post":{"post":true},"put":{"post":true}},"s_color_foreground":{"get":{"result":true},"post":{"post":true},"put":{"post":true}},"s_icon":{"get":{"result":true},"post":{"post":true},"put":{"post":true}},"s_search_group":{"get":{"get":true},"post":{"get":true},"put":{"get":true}},"text_title":{"get":{"result":true},"post":{"post":true}},"text_warning":{"post":{"result":true},"put":{"result":true}},"uid":{"get":{"get":true},"post":{"get":true},"put":{"get":true}}}};
};

/**
 * Returns data for group edit form.
 *
 * Gets full information about a client group.
 *
 * @function
 * @name Wl_Member_Group_Edit_EditModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Adds or changes a client group.
 *
 * Use to update existing client group or create a new one.
 *
 * @function
 * @name Wl_Member_Group_Edit_EditModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

/**
 * Adds or edit client group Query.
 *
 * Use to update existing client group search query or create a new one. Member group should be already created.
 *
 * @function
 * @name Wl_Member_Group_Edit_EditModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
