export default class ScheduleService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async getSchedules(name) {
    const query = name ? `?name=${name}` : "";
    return this.http.fetch(`/schedules${query}`, {
      method: "GET",
      headers: this.getHeaders(),
    });
  }

  async postSchedules(text) {
    return this.http.fetch(`/schedules`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify({ text, name: "hyjoong1" }), // Temp 나중에 수정
    });
  }

  async deleteSchedules(id) {
    return this.http.fetch(`/schedules/${id}`, {
      method: "DELETE",
      headers: this.getHeaders(),
    });
  }

  async updateTweet(id, text) {
    return this.http.fetch(`/schedules/${id}`, {
      method: "PUT",
      headers: this.getHeaders(),
      body: JSON.stringify({ text }),
    });
  }

  getHeaders() {
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
