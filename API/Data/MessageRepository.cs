using System;
using API.DTOs;
using API.Helpers;
using API.Interfaces;

namespace API.Data;

public class MessageRepository : IMessageRepository
{
    public void AddMessage(Message message)
    {
        throw new NotImplementedException();
    }

    public void DeleteMessage(Message message)
    {
        throw new NotImplementedException();
    }

    public Task<Message?> GetMessage(int id)
    {
        throw new NotImplementedException();
    }

    public Task<PagedList<MessageDto>> GetMessagesForUser()
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<MessageDto>> GetMessageThread(string currentUsername, string recipientUsername)
    {
        throw new NotImplementedException();
    }

    public Task<bool> SaveAllAsync()
    {
        throw new NotImplementedException();
    }
}
