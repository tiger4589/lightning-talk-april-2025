using Application.Abstractions;
using Domain;
using MediatR;
using Microsoft.Extensions.Logging;

namespace Application.AddNote;

public class AddNoteCommandHandler(IApplicationDbContext dbContext, ILogger<AddNoteCommandHandler> logger) : IRequestHandler<AddNoteCommand, Guid>
{
    public async Task<Guid> Handle(AddNoteCommand request, CancellationToken cancellationToken)
    {
        if (string.IsNullOrWhiteSpace(request.Content))
        {
            logger.LogWarning("Attempted to add a note with empty content.");
            throw new InvalidOperationException("Note content cannot be empty.");
        }

        if (string.IsNullOrWhiteSpace(request.Title))
        {
            logger.LogWarning("Attempted to add a note with empty title.");
            throw new InvalidOperationException("Note title cannot be empty.");
        }

        var note = new Note
        {
            Content = request.Content,
            Title = request.Title
        };

        await dbContext.Notes.AddAsync(note, cancellationToken);
        await dbContext.SaveChangesAsync(cancellationToken);

        return note.Id;
    }
}