/**
 * Retrieves a list of information about available appointment booking schedule.
 *
 * @augments Wl_Appointment_Book_Schedule_DayTime73ModelAbstract
 * @mixes Wl_Appointment_Book_Schedule_DayTime73ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Schedule_DayTime73Model()
{
  Wl_Appointment_Book_Schedule_DayTime73ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this.ERROR_SILENT = true;

  this.changeInit();
}

Wl_Appointment_Book_Schedule_DayTime73ModelAbstract.extend(Wl_Appointment_Book_Schedule_DayTime73Model);

/**
 * One available timeslot item.
 *
 * @typedef {Object} Wl_Appointment_Book_ScheduleSpaAbstract_a_time
 * @property {string} dt_date Date/time in MySQL format (local).
 * @property {number} i_count Count of available spots for this timeslot.
 * @property {number} i_time Time in seconds since midnight (or another numeric time marker used by backend).
 * @property {boolean} is_waitlist Whether this slot is waitlist-only.
 * @property {string} k_staff Staff key for this slot (can be empty string when not applicable).
 * @property {string} uid_staff Staff user ID for this slot (can be empty string when not applicable).
 * @property {string} s_title Human-readable title to show in UI (time label, staff label, etc).
 */

/**
 * Builds schedule of available appointment booking time grouped by categories.
 *
 * @param {Wl_Staff_Privilege_PrivilegeListModel|null} o_privilege_list
 *   Information about current staff member privileges. <tt>null</tt> for frontend mode.
 * @param {boolean} is_wait_list_ignore  Whether timeslots of waiting lists must be ignored.
 * @param {Wl_Appointment_Book_ScheduleSpaAbstract_a_time[]} a_time_list Timeslots, passed if it is needed to filter them by overlapping services.
 * @returns {{
 *  s_title: String,
 *  a_time: {dt_date: String,html_title: String,i_count: Number,is_select: Boolean,k_staff: String,uid_staff: String}
 * }[]} Schedule of available appointment booking time grouped by categories.
 */
Wl_Appointment_Book_Schedule_DayTime73Model.prototype.groupGet = function(o_privilege_list, is_wait_list_ignore = false, a_time_list = null)
{
  const o_environment = Wl_Session_EnvironmentModel.instanceGet();
  const o_provider = Wl_Appointment_Book_ProviderModel.instanceGet(o_environment.business());
  const o_provider_item = o_provider.itemCurrent();

  let a_group = [
    {
      'a_time': [],
      's_title': m('Morning|wl.appointment.book.schedule.calendar.api')
    },
    {
      'a_time': [],
      's_title': m('Afternoon|wl.appointment.book.schedule.calendar.api')
    },
    {
      'a_time': [],
      's_title': m('Evening|wl.appointment.book.schedule.calendar.api')
    }
  ];

  let can_future = true;
  let can_past = true;
  const dt_now = a_date_a_mysql(a_date_now_a(true));
  if(o_privilege_list&&!o_privilege_list.passportCheck('rs.appointment.period'))
  {
    can_future = o_privilege_list.staffCheck(RsPrivilegeSid.SCHEDULE_FUTURE_APPOINTMENT);
    can_past = o_privilege_list.staffCheck(RsPrivilegeSid.SCHEDULE_PAST_APPOINTMENT);
  }

  $.each(a_time_list || this.a_time, function(i_index,a_time)
  {
    if(is_wait_list_ignore && a_time['is_waitlist']
        || !can_future && a_date_mysql_compare(a_time['dt_date'],dt_now) >= 0
        || !can_past && a_date_mysql_compare(a_time['dt_date'],dt_now) < 0
    )
    {
      return;
    }

    const a_time_html = {
      'dt_date': htmlspecialchars(a_time['dt_date']),
      'html_title': htmlspecialchars(a_time['s_title']),
      'html_timezone': htmlspecialchars(a_time['text_timezone']),
      'i_count': htmlspecialchars(a_time['i_count']),
      'is_waitlist': !!a_time['is_waitlist'],
      'is_select': o_provider_item.dateGet() === a_time['dt_date']&&
          (o_provider_item.uid_staff_date ?
                  (empty(a_time['uid_staff'])||o_provider_item.uid_staff_date === a_time['uid_staff']) :
                  (empty(a_time['k_staff'])||o_provider_item.k_staff_date === a_time['k_staff'])
          ),
      'k_staff': htmlspecialchars(a_time['k_staff']),
      'uid_staff': htmlspecialchars(a_time['uid_staff'])
    };

    if(a_time['i_time']<720)// 12:00PM
      a_group[0]['a_time'].push(a_time_html);
    else if(a_time['i_time']<1020)// 5:00PM
      a_group[1]['a_time'].push(a_time_html);
    else
      a_group[2]['a_time'].push(a_time_html);
  });

  return a_group;
};