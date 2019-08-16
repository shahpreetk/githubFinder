class Github {
    constructor() {
        this.client_id = 'b72b37f047d83687d41d';
        this.client_secret = 'd84fd68208e13b05f906880d87dcf436def9fe25';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}