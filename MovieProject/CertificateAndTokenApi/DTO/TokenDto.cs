namespace CertificateAndTokenApi.DTO
{
    public class TokenDto
    {
        public string Key { get; set; }

        public int Expiration { get; set; }
        public string SystemRole { get; set; }

        public TokenDto(string key, int expiration, string systemRole) { 
            this.Key = key;
            this.Expiration = expiration;
            this.SystemRole = systemRole;
        }
    }
}
