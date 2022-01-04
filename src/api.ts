import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse, AxiosInstance } from 'axios';

interface IConstructor {
  url?: string;
  apiKey: string;
  timeout?: number;
}

export default class Api {
  client: AxiosInstance;
  apiKey: string;
  constructor({
    url = 'https://api.tookanapp.com/v2/',
    apiKey = '',
    timeout = 10 * 1000,
  }: IConstructor) {
    this.client = axios.create({
      baseURL: url,
      timeout,
    });
    this.apiKey = apiKey;
  }

  /*
 AGENT API's
 */

  editAgent = async (object: { api_key: string }) => {
    const path = '/edit_agent';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  addAgent = async (object: { api_key: string }) => {
    const path = '/add_agent';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  getAllAgents = async (object: { api_key: string }) => {
    const path = '/get_available_agents';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  blockAndUnblockAgent = async (object: { api_key: string }) => {
    const path = '/block_and_unblock_agent';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  viewAgentProfile = async (object: { api_key: string }) => {
    const path = '/view_fleet_profile';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  updateAgentTags = async (object: { api_key: string }) => {
    const path = '/update_fleet_tags';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  getAgentTags = async (object: { api_key: string }) => {
    const path = '/get_fleet_tags';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  getAgentLogs = async (object: { api_key: string }) => {
    const path = '/get_agent_duty_logs';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  getAgentLocation = async (object: { api_key: string }) => {
    const path = '/get_fleet_location';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  sendNotificationToAgent = async (object: { api_key: string }) => {
    const path = '/send_notification';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  getAgentSchedule = async (object: { api_key: string }) => {
    const path = '/get_fleets_availability';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  assignAgentToTask = async (object: { api_key: string }) => {
    const path = '/assign_fleet_to_task';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  deleteAgent = async (object: { api_key: string }) => {
    const path = '/delete_fleet_account';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  /*
 TASK API's
 */

  createTask = async (object: { api_key: string }) => {
    const path = '/create_task';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  createMultipleTasks = async (object: { api_key: string }) => {
    const path = '/create_multiple_tasks';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  getTaskDetails = async (object: { api_key: string }) => {
    const path = '/get_task_details';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  getTaskDetailsFromOrderId = async (object: { api_key: string }) => {
    const path = '/get_task_details_by_order_id';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  editTask = async (object: { api_key: string }) => {
    const path = '/edit_task';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  editMultipleTask = async (object: { api_key: string }) => {
    const path = '/edit_multiple_tasks';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  updateTaskStatus = async (object: { api_key: string }) => {
    const path = '/update_task_status';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  startTask = async (object: { api_key: string }) => {
    const path = '/update_task_status';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  cancelTask = async (object: { api_key: string }) => {
    const path = '/update_task_status';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  assignTask = async (object: { api_key: string }) => {
    const path = '/assign_task';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  autoAssignTask = async (object: { api_key: string }) => {
    const path = '/re_autoassign_task';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  getAllTasks = async (object: { api_key: string }) => {
    const path = '/get_all_tasks';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  getTaskStatistics = async (object: { api_key: string }) => {
    const path = '/user_task_stats';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  deleteTask = async (object: { api_key: string }) => {
    const path = '/delete_task';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  /*
 TEAM API's
 */

  createTeam = async (object: { api_key: string }) => {
    const path = '/create_team';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  updateTeam = async (object: { api_key: string }) => {
    const path = '/update_team';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  deleteTeam = async (object: { api_key: string }) => {
    const path = '/delete_team';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  getTeamDetails = async (object: { api_key: string }) => {
    const path = '/view_teams';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  getJobAndAgentDetails = async (object: { api_key: string }) => {
    const path = '/get_job_and_fleet_details';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  /*
 MANAGER API's
 */

  createManager = async (object: { api_key: string }) => {
    const path = '/add_manager';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  viewManager = async (object: { api_key: string }) => {
    const path = '/view_all_manager';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  deleteManager = async (object: { api_key: string }) => {
    const path = '/delete_manager';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  /*
 CUSTOMER API's
 */

  getCustomers = async (object: { api_key: string }) => {
    const path = '/get_all_customers';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  addCustomer = async (object: { api_key: string }) => {
    const path = '/customer/add';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  editCustomer = async (object: { api_key: string }) => {
    const path = '/customer/edit';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  deleteCustomer = async (object: { api_key: string }) => {
    const path = '/delete_customer';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  findCustomerWithPhone = async (object: { api_key: string }) => {
    const path = '/find_customer_with_phone';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  findCustomerWithName = async (object: { api_key: string }) => {
    const path = '/find_customer_with_name';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  viewCustomerProfile = async (object: { api_key: string }) => {
    const path = '/view_customer_profile';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  /*
 MERCHANT API's
 */

  createMerchant = async (object: { api_key: string }) => {
    const path = '/merchant/sign_up';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  viewMerchant = async (object: { api_key: string }) => {
    const path = '/merchant/get_merchant';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  editMerchant = async (object: { api_key: string }) => {
    const path = '/merchant/edit_merchant';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  getMerchantDetails = async (object: { api_key: string }) => {
    const path = '/merchant/get_merchant_data';
    object.api_key = this.apiKey;
    return this.client.get(path, {
      params: object,
    });
  };

  getMerchantReport = async (object: { api_key: string }) => {
    const path = '/merchant/report';
    object.api_key = this.apiKey;
    return this.client.get(path, { params: object });
  };

  blockAndUnblockMerchant = async (object: { api_key: string }) => {
    const path = '/merchant/block_merchant';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  deleteMerchant = async (object: { api_key: string }) => {
    const path = '/merchant/delete';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  getAvailableMerchantAgents = async (object: { api_key: string }) => {
    const path = '/get_available_agents';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  assignMerchantAgentToTask = async (object: { api_key: string }) => {
    const path = '/assign_fleet_to_task';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  createMerchantTask = async (object: { api_key: string }) => {
    const path = '/create_task';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  createMultipleMerchantTasks = async (object: { api_key: string }) => {
    const path = '/create_multiple_tasks';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  editMerchantTask = async (object: { api_key: string }) => {
    const path = '/edit_task';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  assignMerchantToTask = async (object: { api_key: string }) => {
    const path = '/merchant/assign_merchant_to_task';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  getMerchantTeams = async (object: { api_key: string }) => {
    const path = '/merchant/get_merchant_teams';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  /*
 GEOFENCE API's
 */

  addRegion = async (object: { api_key: string }) => {
    const path = '/add_region';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  editRegion = async (object: { api_key: string }) => {
    const path = '/edit_region';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  viewRegions = async (object: { api_key: string }) => {
    const path = '/view_regions';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  viewRegionDetails = async (object: { api_key: string }) => {
    const path = '/view_regions_only';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  removeRegionForAgent = async (object: { api_key: string }) => {
    const path = '/remove_region_for_agent';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  deleteRegion = async (object: { api_key: string }) => {
    const path = '/remove_region';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  /*
 MISSION API's
 */
  createMission = async (object: { api_key: string }) => {
    const path = '/create_mission_task';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  missionList = async (object: { api_key: string }) => {
    const path = '/get_mission_list';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };

  deleteMission = async (object: { api_key: string }) => {
    const path = '/delete_mission';
    object.api_key = this.apiKey;
    return this.client.post(path, object);
  };
}
