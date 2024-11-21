/**
 * Api endpoint to get information about self check-in design.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @see Wl\Reception\Roster\Design\ReceptionRosterDesignApi
 */
function Wl_Reception_Roster_Design_ReceptionRosterDesignModel()
{
    WlSdk_ModelAbstract.apply(this);

    /**
     * @typedef {{}} Wl_Reception_Roster_Design_ReceptionRosterDesignModel_a_business_config_a_staff_ip_restriction_a_role
     * @property {number} id_privilege_role ID of a default system role from {@link RsPrivilegeRoleSid} that this IP restriction applies to.
     * @property {string} k_business_role Key of a custom business role this IP restriction applies to.
     */
    /**
     * @typedef {{}} Wl_Reception_Roster_Design_ReceptionRosterDesignModel_a_business_config_a_staff_ip_restriction
     * @property {Wl_Reception_Roster_Design_ReceptionRosterDesignModel_a_business_config_a_staff_ip_restriction_a_role} a_role Array with the following keys:
     *   <dl>
     *     <dt>int <tt>id_privilege_role</tt></dt>
     *     <dd>ID of a default system role from {@link RsPrivilegeRoleSid} that this IP restriction applies to.</dd>
     *     <dt>string <tt>k_business_role</tt></dt>
     *     <dd>Key of a custom business role this IP restriction applies to.</dd>
     *   </dl>
     * @property {string} ip_allow The IP address or IP range to allow.
     * @property {string} k_business Key of the business the IP restriction belongs to.
     * @property {string} k_staff_ip_restriction Key of the staff IP restriction.
     */
    /**
     * @typedef {{}} Wl_Reception_Roster_Design_ReceptionRosterDesignModel_a_business_config
     * @property {number[]} a_family_relation_login_allow Relationships who clients are allowed to book for. One of the {@link RsFamilyRelationSid} constants.
     * @property {number[]} a_payment_reattempt_not_decline_reason List of not allowed decline reasons to payment reattempt. Each element is one of {@link Wl_Pay_PayExceptionSid} constants.
     * @property {Wl_Reception_Roster_Design_ReceptionRosterDesignModel_a_business_config_a_staff_ip_restriction} a_staff_ip_restriction Array of arrays that contain the following keys:
     *   <dl>
     *     <dt>array <tt>a_role</tt></dt>
     *     <dd>Array with the following keys:
     *       <dl>
     *         <dt>int <tt>id_privilege_role</tt></dt>
     *         <dd>ID of a default system role from {@link RsPrivilegeRoleSid} that this IP restriction applies to.</dd>
     *         <dt>string <tt>k_business_role</tt></dt>
     *         <dd>Key of a custom business role this IP restriction applies to.</dd>
     *       </dl>
     *     </dd>
     *     <dt>string <tt>ip_allow</tt></dt>
     *     <dd>The IP address or IP range to allow.</dd>
     *     <dt>string <tt>k_business</tt></dt>
     *     <dd>Key of the business the IP restriction belongs to.</dd>
     *     <dt>string <tt>k_staff_ip_restriction</tt></dt>
     *     <dd>Key of the staff IP restriction.</dd>
     *   </dl>
     * @property {boolean[]} a_wait_service Keys are list of IDs from {@link Wl_Service_ServiceSid}, and values are flags whether wait list is allowed.
     * @property {boolean} can_apple_login `true` if user can sign in with apple, `false` - otherwise.
     * @property {boolean} can_facebook_login `true` if user can sign in with facebook, `false` - otherwise.
     * @property {boolean} can_google_login `true` if user can sign in with google, `false` - otherwise.
     * @property {boolean} can_tjx_login `true` if user can sign in with TJX, `false` - otherwise.
     * @property {boolean} hide_title Indicates if the title should be hidden.
     * @property {number} i_attendance_direct_delay Number of seconds of inactivity before automatic redirect.
     * @property {number} i_blame Quantity of penalty visits.
     * @property {number} i_book_before Minimum hours|days|months before class should be booked.
     * @property {number} i_book_future Maximum hours|days|months after class can be booked.
     * @property {number} i_book_in_progress Number of minutes for in progress session booking.
     * @property {number} i_book_quick Units of time for the client self check-in window.
     * @property {number} i_book_quick_app Units of time for the look ahead window for attendance app.
     * @property {number} i_book_open Number of minutes for the client check-in window after session has started.
     * @property {number} i_cancel Minimum hours|days|months before class should be canceled without penalty.
     * @property {number} i_cancel_prospect Auto-cancel prospected clients not late this time before session.
     * @property {number} i_cancel_period Cancellation period.
     * @property {number} i_charge_measure Charge measure.
     * @property {number} i_confirm_delay Delay in seconds on attendance web app confirmation screen before redirect to login screen.
     * @property {number} i_contract_minor_age Persons of this age or younger counts as minor.
     * @property {number} i_grace_period Grace period after booking to cancel the session without penalty.
     * @property {number} i_promote Minimum hours|days|months before class should be promoted from wait list.
     * @property {number} i_promote_fastest_response Minimum hours|days|months the notifications which are sent for client confirmation required should be sent to all clients on the wait list at the same time up to the cut off time.
     * @property {number} i_promote_require_confirm Minimum hours|days|months the notifications which are sent for client confirmation must confirm their a promote from the waiting list to the active list.
     * @property {number} i_reattempt_count Number of failed auto-payments reattempts.
     * @property {number} i_service_virtual_auto_start Minutes for <tt>is_service_virtual_auto_start</tt>.
     * @property {number} i_staff_alive Count of minutes that staff can be inactive before automatic logout.
     * @property {number} i_wait_list_limit The maximum number of clients in a wait list.
     * @property {number} id_attendance_direct ID of the action to take when automatically redirecting. One of {@link Wl_Reception_Roster_DirectSid} constants.
     * @property {number} id_blame Defines if client has "Late cancel" or "No shows" sessions. One of {@link Wl_Business_Policy_BlameSid} constants.
     * @property {number} id_book_before Duration ID. One of {@link ADurationSid} constants.
     * @property {number} id_book_future Duration ID. One of {@link ADurationSid} constants.
     * @property {number} id_book_quick Duration ID. One of {@link ADurationSid} constants.
     * @property {number} id_book_quick_app Duration ID. One of {@link ADurationSid} constants.
     * @property {number} id_cancel Duration ID. One of {@link ADurationSid} constants.
     * @property {number} id_cancel_period Duration ID. One of {@link ADurationSid} constants.
     * @property {number} id_cancel_prospect Duration ID. One of {@link ADurationSid} constants.
     * @property {number} id_charge Client's charge if he has "Late cancel" or "No shows" sessions.
     *  One of {@link Wl_Business_Policy_ChargeSid} constants.
     * @property {number} id_charge_date_type Type of date to charge client account. One of {@link Wl_Business_Config_ChargeDateTypeSid} constants.
     * @property {number} id_charge_week_day Type of week day to charge client account. One of {@link ADateWeekSid} constants.
     * @property {number} id_charge_measure Duration ID. One of {@link ADurationSid} constants.
     * @property {number} id_grace_period Duration ID. One of {@link ADurationSid} constants.
     * @property {number} id_moderate_policy_admin_mode One of {@link RsModeratePolicySid} constants.
     * @property {number} id_moderate_policy_staff_mode One of {@link ADurationSid} constants.
     * @property {number} id_promote Duration ID. One of {@link ADurationSid} constants.
     * @property {number} id_promote_fastest_response Duration ID. One of {@link ADurationSid} constants.
     * @property {number} id_promote_require_confirm Duration ID. One of {@link ADurationSid} constants.
     * @property {number} id_visit_action Visit action. One of {@link RsVisitActionSid} constants.
     * @property {number} id_visit_virtual_action Visit action for virtual services that finished. One of {@link RsVisitActionSid} constants.
     * @property {number} id_wait_list_promotion Wait list promotion option.
     * One of {@link \Wl\Business\Policy\BusinessPolicyWaitListPromotionEnum} constants.
     * @property {boolean} is_apply_admin `true` if admin is applying changes, `false` otherwise.
     * @property {boolean} is_apply_staff `true` if staff is applying changes, `false` otherwise.
     * @property {boolean} is_attend_auto `true` if automatic self check-ins are allowed, `false` otherwise.
     * @property {boolean} is_attend_free `true` if clients are allowed to check-in unpaid, `false` otherwise.
     * @property {boolean} is_attend_self `true` if clients can check-in using the Client Web App and Achieve Web App, `false` otherwise.
     * @property {boolean} is_attend_self_reception `true` if self check-ins are available on reception pages, `false` otherwise.
     * @property {boolean} is_auto_charge_promotion `true` Automatically charge the client upon promotion, `false` otherwise.
     * @property {boolean} is_back_to_back `true` if multiple appointments booked in back-to-back mode, `false` otherwise.
     * @property {boolean} is_book_appointment_authorize `true` if clients must sing in to book an appointment, `false` otherwise.
     * @property {boolean} is_book_in_progress `true` if clients can book class/event sessions that are in progress, `false` otherwise.
     * @property {boolean} is_book_inside_active_pay_period if `true` - clients with purchase options are only allowed
     * to book sessions within their current paid period, `false` - during purchase option's duration.
     * @property {boolean} is_book_open `true` if allow clients to check-in to sessions in progress, `false` otherwise.
     * @property {boolean} is_book_optional `true` if clients are allowed to check-in without booking prior, `false` otherwise.
     * @property {boolean} is_book_quick_app `true` if clients are allowed to sign in before session is started., `false` otherwise.
     * @property {boolean} is_book_repeat_client `true` if the setting for frequency during class recurring booking will be `never end` by default,
     * `false` otherwise.
     * @property {boolean} is_book_repeat_no_end_date `true` if appointment bookings default to weekly recurring with no end date, `false` otherwise.
     * @property {boolean} is_book_repeat_no_end_date_appointment `true` if appointment bookings default to weekly recurring with no end date, `false` otherwise.
     * @property {boolean} is_charge_client_account_payment `true` if business automatically charge clients with a negative account balance, `false` otherwise.
     * @property {boolean} is_client_select_date_asset `true` if clients are allowed to select a date and time while asset booking, `false` otherwise.
     * @property {boolean} is_contract `true` if clients are required to agree to liability release, `false` otherwise.
     * @property {number} is_contract_book_only `true` if clients are required to agree to liability release only while booking, `false` otherwise.
     * @property {boolean} is_contract_minor `true` if client can sign online waiver on behalf of related minor persons, `false` otherwise.
     * @property {boolean} is_disable_promotion `true` if a client's automatic payment fails, their account should not be
     * debited and their purchase option becomes inactive, `false` - otherwise. Default `false`.
     * @property {boolean} is_disable_purchase_contract `true` means that client will not be able to use the purchase
     *    option that has a contract, unless they sign that contract, `false` otherwise
     * @property {boolean} is_enable_client_cancel `true` If client cancel setting is enabled in business, `false` otherwise.
     * @property {boolean} is_enable_cancel_charge `true` - allow charge for "Late cancel" or "No shows" sessions, `false` - otherwise.
     * @property {boolean} is_enable_client_cannot_edit_profile_picture `true` If clients cannot edit their profile picture, `false` otherwise.
     * @property {boolean} is_enable_client_id `true` If it is allowed to generate Client ID automatically for new clients, `false` otherwise.
     * @property {boolean} is_enable_client_vaccination `true` If client vaccination status is shown, `false` otherwise.
     * @property {boolean} is_enable_grace_period Whether there is grace period after booking to cancel the session without penalty.
     *  `true` if grace period is enabled, `false` otherwise.
     * @property {boolean} is_enable_payment_penalty `true` If charge a penalty after the final auto-payment attempt, `false` otherwise.
     * @property {boolean} is_enable_payment_reattempt Whether to reattempt failed auto-payments.
     * `true` if business reattempts failed auto-payments, `false` otherwise.
     * @property {boolean} is_enable_staff_ip_restriction Whether to restrict which IP addresses staff can login from.
     * `true` if there is a restriction on certain IP addresses staff can login from, `false` otherwise.
     * @property {boolean} is_family_relation_book `true` if clients are allowed to book for their relationships without switching profiles, `false` otherwise.
     * @property {boolean} is_family_relation_display_client `true` if relationships are displayed to clients, `false` otherwise..
     * @property {boolean} is_multiple_booking `true` if services allow multiple appointment booking, `false` otherwise..
     * @property {boolean} is_prevent_booking `true` if booking for a client with negative balance is disabled, `false` - otherwise. Default `false`.
     * @property {boolean} is_prevent_booking_dependent `true` if business restricts dependents from booking services if the payer has a negative account balance. `false` otherwise
     * @property {boolean} is_promotion_priority `true` if all pricing options in the business have the same priority,
     * when they are applied to visit, `false` - otherwise.
     * @property {boolean} is_profile_timezone `true` if clients are allowed to adjust timezone, `false` - otherwise.
     * @property {boolean} is_purchase_pool Whether automated purchases that should paid by the same payer should be combined in one purchase pool to be
     *  processed together. `true` means to combine, `false` - to process each payment separately.
     * @property {boolean} is_reconcile_auto `true` if business automatically reconciles unpaid visits upon check in, `false` - otherwise.
     * @property {boolean} is_require_login_confirm `true` if business requires clients to sign in when they are cancelling or confirming a session,
     * `false` - otherwise.
     * @property {boolean} is_service_virtual_auto_start `true` if business activates non-integrated session without the staff starting the virtual session,
     * `false` - otherwise.
     * @property {boolean} is_service_virtual_track_auto `true` if client's attendance auto-tracking for virtual services is turned on, `false` - otherwise.
     * @property {boolean} is_staff_restrict `true` if clients can't choose a provider in the appointment wizard, `false` otherwise.
     * @property {boolean} is_wait `true` if all places in class period are booked, `false` otherwise.
     * @property {boolean} is_wait_list_limit `true` to use class/event specific wait list limit, `false` to use the limit from default policies.
     * `false` for appointments.
     * @property {boolean} is_wait_list_unpaid `true` If it is allowed for clients to join the wait list unpaid, `false` otherwise.
     * @property {number} k_currency Currency key.
     * @property {number} k_timezone Timezone key. The primary key in {@link \AGeoTimezoneSql} table.
     * @property {string} m_payment_penalty Penalty amount to charge after final auto-payment attempt.
     * @property {string} s_color Code of background color.
     * @property {string} s_contract Contract text.
     * @property {boolean} show_business_name `true` - show business name on attendance web app; `false` - do not show.
     * @property {boolean} show_confirm_screen `true` - show confirm screen on attendance web app; `false` - do not show.
     * @property {string} text_business_name Name of the business to display in the attendance web app.
     * @property {string} text_description Description of the business to display in the attendance web app.
     * @property {string} url_custom Custom Url of a business
     */

    /**
     * Business config data:
     * <dl>
     *   <dt>int[] <var>a_family_relation_login_allow</var></dt>
     *    <dd>
     *      Relationships who clients are allowed to book for. One of the {@link RsFamilyRelationSid} constants.
     *    </dd>
     *   <dt>int[] <var>a_payment_reattempt_not_decline_reason</var></dt>
     *   <dd>
     *     List of not allowed decline reasons to payment reattempt. Each element is one of {@link Wl_Pay_PayExceptionSid} constants.
     *   </dd>
     *   <dt>array <var>a_staff_ip_restriction</var></dt>
     *   <dd>Array of arrays that contain the following keys:
     *       <dl>
     *         <dt>array <var>a_role</var></dt>
     *         <dd>Array with the following keys:
     *           <dl>
     *             <dt>int <var>id_privilege_role</var></dt>
     *             <dd>ID of a default system role from {@link RsPrivilegeRoleSid} that this IP restriction applies to.</dd>
     *             <dt>string <var>k_business_role</var></dt>
     *             <dd>Key of a custom business role this IP restriction applies to.</dd>
     *           </dl>
     *         </dd>
     *         <dt>string <var>ip_allow</var></dt>
     *         <dd>The IP address or IP range to allow.</dd>
     *         <dt>string <var>k_business</var></dt>
     *         <dd>Key of the business the IP restriction belongs to.</dd>
     *         <dt>string <var>k_staff_ip_restriction</var></dt>
     *         <dd>Key of the staff IP restriction.</dd>
     *       </dl>
     *   </dd>
     *   <dt>bool[] <var>a_wait_service</var></dt>
     *   <dd>Keys are list of IDs from {@link Wl_Service_ServiceSid}, and values are flags whether wait list is allowed.</dd>
     *   <dt>bool <var>can_apple_login</var></dt>
     *   <dd>`true` if user can sign in with apple, `false` - otherwise.</dd>
     *   <dt>bool <var>can_facebook_login</var></dt>
     *   <dd>`true` if user can sign in with facebook, `false` - otherwise.</dd>
     *   <dt>bool <var>can_google_login</var></dt>
     *   <dd>`true` if user can sign in with google, `false` - otherwise.</dd>
     *   <dt>bool <var>can_tjx_login</var></dt>
     *   <dd>`true` if user can sign in with TJX, `false` - otherwise.</dd>
     *   <dt>bool <var>hide_title</var></dt>
     *   <dd>Indicates if the title should be hidden.</dd>
     *   <dt>int <var>i_attendance_direct_delay</var></dt>
     *   <dd>Number of seconds of inactivity before automatic redirect.</dd>
     *   <dt>int <var>i_blame</var></dt>
     *   <dd>Quantity of penalty visits.</dd>
     *   <dt>int <var>i_book_before</var></dt>
     *   <dd>Minimum hours|days|months before class should be booked.</dd>
     *   <dt>int <var>i_book_future</var></dt>
     *   <dd>Maximum hours|days|months after class can be booked.</dd>
     *   <dt>int <var>i_book_in_progress</var></dt>
     *   <dd>Number of minutes for in progress session booking.</dd>
     *   <dt>int <var>i_book_quick</var></dt>
     *   <dd>Units of time for the client self check-in window.</dd>
     *   <dt>int <var>i_book_quick_app</var></dt>
     *   <dd>Units of time for the look ahead window for attendance app.</dd>
     *   <dt>int <var>i_book_open</var></dt>
     *   <dd>Number of minutes for the client check-in window after session has started.</dd>
     *   <dt>int <var>i_cancel</var></dt>
     *   <dd>Minimum hours|days|months before class should be canceled without penalty.</dd>
     *   <dt>int <var>i_cancel_prospect</var></dt>
     *   <dd>Auto-cancel prospected clients not late this time before session.</dd>
     *   <dt>int <var>i_cancel_period</var></dt>
     *   <dd>Cancellation period.</dd>
     *   <dt>int <var>i_charge_measure</var></dt>
     *   <dd>Charge measure.</dd>
     *   <dt>int <var>i_confirm_delay</var></dt>
     *   <dd>Delay in seconds on attendance web app confirmation screen before redirect to login screen.</dd>
     *   <dt>int <var>i_contract_minor_age</var></dt>
     *   <dd>Persons of this age or younger counts as minor.</dd>
     *   <dt>int <var>i_grace_period</var></dt>
     *   <dd>Grace period after booking to cancel the session without penalty.</dd>
     *   <dt>int <var>i_promote</var></dt>
     *   <dd> Minimum hours|days|months before class should be promoted from wait list.</dd>
     *   <dt>int <var>i_promote_fastest_response</var></dt>
     *   <dd> Minimum hours|days|months the notifications which are sent for client confirmation required should be sent to all clients on the wait list at the same time up to the cut off time.</dd>
     *   <dt>int <var>i_promote_require_confirm</var></dt>
     *   <dd> Minimum hours|days|months the notifications which are sent for client confirmation must confirm their a promote from the waiting list to the active list.</dd>
     *   <dt>int <var>i_reattempt_count</var></dt>
     *   <dd>Number of failed auto-payments reattempts.</dd>
     *   <dt>int <var>i_service_virtual_auto_start</var></dt>
     *   <dd>Minutes for <var>is_service_virtual_auto_start</var>.</dd>
     *   <dt>int <var>i_staff_alive</var></dt>
     *   <dd>Count of minutes that staff can be inactive before automatic logout.</dd>
     *   <dt>int <var>i_wait_list_limit</var></dt>
     *   <dd>The maximum number of clients in a wait list.</dd>
     *   <dt>int <var>id_attendance_direct</var></dt>
     *   <dd>ID of the action to take when automatically redirecting. One of {@link Wl_Reception_Roster_DirectSid} constants.</dd>
     *   <dt>int <var>id_blame</var></dt>
     *   <dd>Defines if client has "Late cancel" or "No shows" sessions. One of {@link Wl_Business_Policy_BlameSid} constants.</dd>
     *   <dt>int <var>id_book_before</var></dt>
     *   <dd>Duration ID. One of {@link ADurationSid} constants.</dd>
     *   <dt>int <var>id_book_future</var></dt>
     *   <dd>Duration ID. One of {@link ADurationSid} constants.</dd>
     *   <dt>int <var>id_book_quick</var></dt>
     *   <dd>Duration ID. One of {@link ADurationSid} constants.</dd>
     *   <dt>int <var>id_book_quick_app</var></dt>
     *   <dd>Duration ID. One of {@link ADurationSid} constants.</dd>
     *   <dt>int <var>id_cancel</var></dt>
     *   <dd>Duration ID. One of {@link ADurationSid} constants.</dd>
     *   <dt>int <var>id_cancel_period</var></dt>
     *   <dd>Duration ID. One of {@link ADurationSid} constants.</dd>
     *   <dt>int <var>id_cancel_prospect</var></dt>
     *   <dd>Duration ID. One of {@link ADurationSid} constants.</dd>
     *   <dt>int <var>id_charge</var></dt>
     *   <dd>Client's charge if he has "Late cancel" or "No shows" sessions.
     *      One of {@link Wl_Business_Policy_ChargeSid} constants.</dd>
     *   <dt>int <var>id_charge_date_type</var></dt>
     *   <dd>Type of date to charge client account. One of {@link Wl_Business_Config_ChargeDateTypeSid} constants.</dd>
     *   <dt>int <var>id_charge_week_day</var></dt>
     *   <dd>Type of week day to charge client account. One of {@link ADateWeekSid} constants.</dd>
     *   <dt>int <var>id_charge_measure</var></dt>
     *   <dd>Duration ID. One of {@link ADurationSid} constants.</dd>
     *   <dt>int <var>id_grace_period</var></dt>
     *   <dd>Duration ID. One of {@link ADurationSid} constants.</dd>
     *   <dt>int <var>id_moderate_policy_admin_mode</var></dt>
     *   <dd>One of {@link RsModeratePolicySid} constants.</dd>
     *   <dt>int <var>id_moderate_policy_staff_mode</var></dt>
     *   <dd>One of {@link ADurationSid} constants.</dd>
     *   <dt>int <var>id_promote</var></dt>
     *   <dd>Duration ID. One of {@link ADurationSid} constants.</dd>
     *   <dt>int <var>id_promote_fastest_response</var></dt>
     *   <dd>Duration ID. One of {@link ADurationSid} constants.</dd>
     *   <dt>int <var>id_promote_require_confirm</var></dt>
     *   <dd>Duration ID. One of {@link ADurationSid} constants.</dd>
     *   <dt>int <var>id_visit_action</var></dt>
     *   <dd>Visit action. One of {@link RsVisitActionSid} constants.</dd>
     *   <dt>int <var>id_visit_virtual_action</var></dt>
     *   <dd>Visit action for virtual services that finished. One of {@link RsVisitActionSid} constants.</dd>
     *   <dt>int <var>id_wait_list_promotion</var></dt>
     *   <dd>Wait list promotion option.
     *     One of {@link \Wl\Business\Policy\BusinessPolicyWaitListPromotionEnum} constants.</dd>
     *   <dt>bool <var>is_apply_admin</var></dt>
     *   <dd>`true` if admin is applying changes, `false` otherwise.</dd>
     *   <dt>bool <var>is_apply_staff</var></dt>
     *   <dd>`true` if staff is applying changes, `false` otherwise.</dd>
     *   <dt>bool <var>is_attend_auto</var></dt>
     *   <dd>`true` if automatic self check-ins are allowed, `false` otherwise.</dd>
     *   <dt>bool <var>is_attend_free</var></dt>
     *   <dd>`true` if clients are allowed to check-in unpaid, `false` otherwise.</dd>
     *   <dt>bool <var>is_attend_self</var></dt>
     *   <dd>`true` if clients can check-in using the Client Web App and Achieve Web App, `false` otherwise.</dd>
     *   <dt>bool <var>is_attend_self_reception</var></dt>
     *   <dd>`true` if self check-ins are available on reception pages, `false` otherwise.</dd>
     *   <dt>bool <var>is_auto_charge_promotion</var></dt>
     *   <dd>`true` Automatically charge the client upon promotion, `false` otherwise.</dd>
     *   <dt>bool <var>is_back_to_back</var></dt>
     *   <dd>`true` if multiple appointments booked in back-to-back mode, `false` otherwise.</dd>
     *   <dt>bool <var>is_book_appointment_authorize</var></dt>
     *   <dd>`true` if clients must sing in to book an appointment, `false` otherwise.</dd>
     *   <dt>bool <var>is_book_in_progress</var></dt>
     *   <dd>`true` if clients can book class/event sessions that are in progress, `false` otherwise.</dd>
     *   <dt>bool <var>is_book_inside_active_pay_period</var></dt>
     *   <dd>if `true` - clients with purchase options are only allowed
     *     to book sessions within their current paid period, `false` - during purchase option's duration.</dd>
     *   <dt>bool <var>is_book_open</var></dt>
     *   <dd>`true` if allow clients to check-in to sessions in progress, `false` otherwise.</dd>
     *   <dt>bool <var>is_book_optional</var></dt>
     *   <dd>`true` if clients are allowed to check-in without booking prior, `false` otherwise.</dd>
     *   <dt>bool <var>is_book_quick_app</var></dt>
     *   <dd>`true` if clients are allowed to sign in before session is started., `false` otherwise.</dd>
     *   <dt>bool <var>is_book_repeat_client</var></dt>
     *   <dd>`true` if the setting for frequency during class recurring booking will be `never end` by default,
     *     `false` otherwise.</dd>
     *   <dt>bool <var>is_book_repeat_no_end_date</var></dt>
     *   <dd>`true` if appointment bookings default to weekly recurring with no end date, `false` otherwise.</dd>
     *   <dt>bool <var>is_book_repeat_no_end_date_appointment</var></dt>
     *   <dd>`true` if appointment bookings default to weekly recurring with no end date, `false` otherwise.</dd>
     *   <dt>bool <var>is_charge_client_account_payment</var></dt>
     *   <dd>`true` if business automatically charge clients with a negative account balance, `false` otherwise.</dd>
     *   <dt>bool <var>is_client_select_date_asset</var></dt>
     *   <dd>`true` if clients are allowed to select a date and time while asset booking, `false` otherwise.</dd>
     *   <dt>bool <var>is_contract</var></dt>
     *   <dd>`true` if clients are required to agree to liability release, `false` otherwise.</dd>
     *   <dt>int <var>is_contract_book_only</var></dt>
     *   <dd>`true` if clients are required to agree to liability release only while booking, `false` otherwise.</dd>
     *   <dt>bool <var>is_contract_minor</var></dt>
     *   <dd>`true` if client can sign online waiver on behalf of related minor persons, `false` otherwise.</dd>
     *   <dt>bool <var>is_disable_promotion</var></dt>
     *   <dd>`true` if a client's automatic payment fails, their account should not be
     *     debited and their purchase option becomes inactive, `false` - otherwise. Default `false`.</dd>
     *   <dt>bool <var>is_disable_purchase_contract</var></dt>
     *   <dd>`true` means that client will not be able to use the purchase
     *    option that has a contract, unless they sign that contract, `false` otherwise</dd>
     *   <dt>bool <var>is_enable_client_cancel</var></dt>
     *   <dd>`true` If client cancel setting is enabled in business, `false` otherwise.</dd>
     *   <dt>bool <var>is_enable_cancel_charge</var></dt>
     *   <dd>`true` - allow charge for "Late cancel" or "No shows" sessions, `false` - otherwise.</dd>
     *   <dt>bool <var>is_enable_client_cannot_edit_profile_picture</var></dt>
     *   <dd>`true` If clients cannot edit their profile picture, `false` otherwise.</dd>
     *   <dt>bool <var>is_enable_client_id</var></dt>
     *   <dd>`true` If it is allowed to generate Client ID automatically for new clients, `false` otherwise.</dd>
     *   <dt>bool <var>is_enable_client_vaccination</var></dt>
     *   <dd>`true` If client vaccination status is shown, `false` otherwise.</dd>
     *   <dt>bool <var>is_enable_grace_period</var></dt>
     *    <dd>Whether there is grace period after booking to cancel the session without penalty.
     *      `true` if grace period is enabled, `false` otherwise.</dd>
     *   <dt>bool <var>is_enable_payment_penalty</var></dt>
     *   <dd>`true` If charge a penalty after the final auto-payment attempt, `false` otherwise.</dd>
     *   <dt>bool <var>is_enable_payment_reattempt</var></dt>
     *   <dd>Whether to reattempt failed auto-payments.
     *     `true` if business reattempts failed auto-payments, `false` otherwise.</dd>
     *   <dt>bool <var>is_enable_staff_ip_restriction</var></dt>
     *   <dd>Whether to restrict which IP addresses staff can login from.
     *     `true` if there is a restriction on certain IP addresses staff can login from, `false` otherwise.</dd>
     *   <dt>bool <var>is_family_relation_book</var></dt>
     *   <dd>`true` if clients are allowed to book for their relationships without switching profiles, `false` otherwise.</dd>
     *   <dt>bool <var>is_family_relation_display_client</var></dt>
     *   <dd>`true` if relationships are displayed to clients, `false` otherwise..</dd>
     *   <dt>bool <var>is_multiple_booking</var></dt>
     *   <dd>`true` if services allow multiple appointment booking, `false` otherwise..</dd>
     *   <dt>bool <var>is_prevent_booking</var></dt>
     *   <dd>`true` if booking for a client with negative balance is disabled, `false` - otherwise. Default `false`.</dd>
     *   <dt>bool <var>is_prevent_booking_dependent</var></dt>
     *   <dd>`true` if business restricts dependents from booking services if the payer has a negative account balance. `false` otherwise</dd>
     *   <dt>bool <var>is_promotion_priority</var></dt>
     *   <dd>`true` if all pricing options in the business have the same priority,
     *     when they are applied to visit, `false` - otherwise.</dd>
     *   <dt>bool <var>is_profile_timezone</var></dt>
     *   <dd>`true` if clients are allowed to adjust timezone, `false` - otherwise.</dd>
     *   <dt>bool <var>is_purchase_pool</var></dt>
     *   <dd>Whether automated purchases that should paid by the same payer should be combined in one purchase pool to be
     *      processed together. `true` means to combine, `false` - to process each payment separately.</dd>
     *   <dt>bool <var>is_reconcile_auto</var></dt>
     *   <dd>`true` if business automatically reconciles unpaid visits upon check in, `false` - otherwise.</dd>
     *   <dt>bool <var>is_require_login_confirm</var></dt>
     *   <dd>`true` if business requires clients to sign in when they are cancelling or confirming a session,
     *     `false` - otherwise.</dd>
     *   <dt>bool <var>is_service_virtual_auto_start</var></dt>
     *   <dd>`true` if business activates non-integrated session without the staff starting the virtual session,
     *     `false` - otherwise.</dd>
     *   <dt>bool <var>is_service_virtual_track_auto</var></dt>
     *   <dd>`true` if client's attendance auto-tracking for virtual services is turned on, `false` - otherwise.</dd>
     *   <dt>bool <var>is_staff_restrict</var></dt>
     *   <dd>`true` if clients can't choose a provider in the appointment wizard, `false` otherwise.</dd>
     *   <dt>bool <var>is_wait</var></dt>
     *   <dd>`true` if all places in class period are booked, `false` otherwise.</dd>
     *   <dt>bool <var>is_wait_list_limit</var></dt>
     *   <dd>`true` to use class/event specific wait list limit, `false` to use the limit from default policies.
     *     `false` for appointments.</dd>
     *   <dt>bool <var>is_wait_list_unpaid</var></dt>
     *   <dd>`true` If it is allowed for clients to join the wait list unpaid, `false` otherwise.</dd>
     *   <dt>int <var>k_currency</var></dt>
     *   <dd>Currency key.</dd>
     *   <dt>int <var>k_timezone</var></dt>
     *   <dd>Timezone key. The primary key in {@link \AGeoTimezoneSql} table.</dd>
     *   <dt>string <var>m_payment_penalty</var></dt>
     *   <dd>Penalty amount to charge after final auto-payment attempt.</dd>
     *   <dt>string <var>s_color</var></dt>
     *   <dd>Code of background color.</dd>
     *   <dt>string <var>s_contract</var></dt>
     *   <dd>Contract text.</dd>
     *   <dt>bool <var>show_business_name</var></dt>
     *   <dd>`true` - show business name on attendance web app; `false` - do not show.</dd>
     *   <dt>bool <var>show_confirm_screen</var></dt>
     *   <dd>`true` - show confirm screen on attendance web app; `false` - do not show.</dd>
     *   <dt>string <var>text_business_name</var></dt>
     *   <dd>Name of the business to display in the attendance web app.</dd>
     *   <dt>string <var>text_description</var></dt>
     *   <dd>Description of the business to display in the attendance web app.</dd>
     *   <dt>string <var>url_custom</var></dt>
     *   <dd>Custom Url of a business</dd>
     * </dl>
     *
     * @get result
     * @type {Wl_Reception_Roster_Design_ReceptionRosterDesignModel_a_business_config}
     */
    this.a_business_config = [];

    /**
     * Key of the business.
     *
     * @get get
     * @type {string}
     */
    this.k_business = "";

    this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reception_Roster_Design_ReceptionRosterDesignModel);

/**
 * @inheritDoc
 */
Wl_Reception_Roster_Design_ReceptionRosterDesignModel.prototype.config=function()
{
    return {"a_field": {"a_business_config": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};